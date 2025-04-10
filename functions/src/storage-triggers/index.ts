import {onObjectFinalized, 
  onObjectArchived} from "firebase-functions/v2/storage";
import {logger} from "firebase-functions/v2";

export const onFinalized = onObjectFinalized((event) => {
  const data = event.data;
  logger.info("This is data", data);
});

export const onArchive = onObjectArchived((event) => {
  const data = event.data;
  logger.info("This is data", data);
  logger.log("Event objects", event);
});
