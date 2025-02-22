import {initializeApp} from "firebase-admin/app";
import {onRequest} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";

initializeApp();

export const helloWorld = onRequest((request, response) => {
  response.send("Hi there this is the first request");
  logger.log("This is the log from the request");
});

export {checkUserDomain} from "./user-verification/user-verification"; 
export {prevetBannedUsers} from "./user-verification/user-verification"; 
