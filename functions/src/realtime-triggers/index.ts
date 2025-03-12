import {onValueUpdated, onValueDeleted} from "firebase-functions/v2/database";
import {logger} from "firebase-functions";


export const onDataUpdated = 
onValueUpdated("/users/{uid}/original", (event) => {
  const original: string = event.data.after.val();

  if (!event.data.after.exists()) {
    return null;
  }

  const uppercase = original.toUpperCase();

  logger.info(`Data changed from ${original} to ${uppercase} sucsessfully`);

  return event.data.after.ref.parent?.child("uppercase").set(uppercase);
});

export const onDataDeleted = onValueDeleted({
  ref: "/users/{uid}/original",
  region: "us-central1",
}, (event) => {
  if (!event.data.exists()) {
    return null;
  }
  
  const original = event.data.val();

  const {uid} = event.params;

  logger.log(`Item ${original} with ID: ${uid} deleted successfully`);

  return event.data.ref.parent?.remove();
});
