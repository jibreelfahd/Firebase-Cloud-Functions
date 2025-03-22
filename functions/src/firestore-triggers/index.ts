import {onDocumentCreated, onDocumentUpdated, onDocumentDeleted} from
  "firebase-functions/v2/firestore";
import {logger} from "firebase-functions/v2";

// for single document --> "users/targetDocument"
export const onDocCreated = onDocumentCreated("users/{userID}", (event) => {
  const snapData = event.data;
  const userData = snapData?.data();

  if (!snapData) {
    logger.error("No user content available");
    return;
  }

  logger.info("User Created", userData);
});

export const onDocUpdated = onDocumentUpdated("users/{userID}", (event) => {
  const userID = event.params.userID;

  logger.info("User Parameters", userID);
});

export const onDocDeleted = onDocumentDeleted("users/{userID}", (event) => {
  const snapData = event.data;
  const userData = snapData?.data();

  if (!snapData) {
    logger.error("No user content available at the moment", userData);
  }
  logger.info("User Deleted", userData);
});

export const onWriteToFirestore = 
onDocumentUpdated("users/{userID}", (event) => {
  const newData = event.data?.after.data();
  const prevData = event.data?.before.data();

  if (newData?.email === prevData?.email) {
    return null;
  }

  let count = newData?.name_change_count;

  if (!count) {
    count = 0;
  }

  if (event.data?.after) {
    return event.data.after.ref.set({
      name_change_count: count + 1,
    }, {merge: true});
  }
  
  return null;
});
