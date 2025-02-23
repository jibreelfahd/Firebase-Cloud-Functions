import * as functions from "firebase-functions/v1";
import {logger} from "firebase-functions";
import {HttpsError} from "firebase-functions/https";

export const onUserCreated = functions.auth.user().onCreate((user) => {
  if (!user.emailVerified) {
    logger.warn("Email not verified");
    throw new HttpsError("permission-denied", "Email is not valid");
  }
  logger.log("User Created", user.uid, user.email, user.displayName,
    user.customClaims);
});

export const onDeleteUser = functions.auth.user().onDelete((user) => {
  const {uid, email, displayName} = user;
  logger.log("User Deleted", uid, email, displayName);
});
