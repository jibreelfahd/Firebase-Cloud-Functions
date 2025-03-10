import * as admin from "firebase-admin";
import {Reference} from "firebase-admin/database";
import {logger} from "firebase-functions";

export const addToDatabase = async (original: string) => {
  const usersRef: Reference = admin.database().ref("users");

  await usersRef.push({original});
  logger.info("Items added to database");
  await wait(2000);
};

// eslint-disable-next-line require-jsdoc
function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
