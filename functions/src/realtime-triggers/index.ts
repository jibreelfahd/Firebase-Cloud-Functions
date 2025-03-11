import {onValueCreated} from "firebase-functions/v2/database";
import {logger} from "firebase-functions";


export const onDataCreated = 
onValueCreated("/users/{uid}/original", (event) => {
  if (event.data.exists()) {
    const data: string = event.data.val();
  
    const uid = event.params.uid;
  
    logger.info("Item UID", uid);
    logger.info("Data received", data);
  }
  return;
});
