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
  const userDataBeforeChange = event.data?.before.data();
  const userDataAfterChange = event.data?.after.data();

  logger.info("User updated", userDataBeforeChange, userDataAfterChange);
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
