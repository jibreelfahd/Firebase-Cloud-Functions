import {onValueCreated} from "firebase-functions/v2/database";
import {logger} from "firebase-functions";


export const onDataCreated = 
onValueCreated("/users/{uid}/original", (event) => {
  const data: string = event.data.val();

  const uppercase = data.toUpperCase();
  logger.info(`Data received: ${data}, Update Done: ${uppercase}`);
  logger.info("Additional Information" + event.id + " ," +
    event.location + " ," + event.params + " ," + event.ref);

  return event.data.ref.parent?.child("uppercase").set(uppercase);
});
