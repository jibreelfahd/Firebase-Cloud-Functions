import {onObjectFinalized} from "firebase-functions/v2/storage";
import {logger} from "firebase-functions/v2";

export const onFinalized = onObjectFinalized((event) => {
  const data = event.data;
  logger.info("This is data", data);
});
