import {onValueCreated} from "firebase-functions/v2/database";
import {logger} from "firebase-functions";


export const onDataCreated = onValueCreated("users/{uid}", (event) => {
  const dataRecieved = event.data.val();

  logger.log("Event Created Succesfully", dataRecieved);
});
