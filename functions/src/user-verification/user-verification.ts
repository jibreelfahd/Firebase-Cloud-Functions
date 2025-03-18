import {beforeUserCreated,
  beforeUserSignedIn} from "firebase-functions/v2/identity";
import {logger} from "firebase-functions";
import {HttpsError} from "firebase-functions/v2/https";
import {getAuth} from "firebase-admin/auth";

// Check and verify user email
export const checkUserDomain = beforeUserCreated((event) => {
  const user = event.data;
  if (!user?.email?.includes("@gmail.com") && !user?.emailVerified) {
    logger.log("Invalid Parameters", user?.email);
    throw new HttpsError("invalid-argument", 
      "Value Incorrect, check email and try again.");
  }
  return user;
});

// Prevent banned users from signing in
export const preventBannedUsers = beforeUserSignedIn(async (event) => {
  const userEmail = event.data?.email as string;

  const bannedUser = await getAuth().getUserByEmail(userEmail);

  if (bannedUser.customClaims?.banned) {
    throw new HttpsError("permission-denied",
      "User is banned from signing into the app");
  }
});
