import {initializeApp} from "firebase-admin/app";
initializeApp();

// import {addToDatabase} from "./realtime-triggers//addFields";

export {checkUserDomain} from "./user-verification/user-verification"; 
export {preventBannedUsers} from "./user-verification/user-verification"; 
export {onUserCreated} from "./auth-triggers/auth-triggers";
export {onDeleteUser} from "./auth-triggers/auth-triggers";
export {onDocCreated} from "./firestore-triggers/index";
export {onDocUpdated} from "./firestore-triggers/index";
export {onDocDeleted} from "./firestore-triggers/index";
export {onWriteToFirestore} from "./firestore-triggers/index";
export {onDataUpdated} from "./realtime-triggers/index";
export {onDataDeleted} from "./realtime-triggers/index";

// adding items to realtime database in the path /users/{uid}
// (async () => {
//   await addToDatabase("nike");
//   await addToDatabase("puma");
//   await addToDatabase("air force");
//   await addToDatabase("slide");
//   process.exit(0);
// })().catch((err) => console.log(err));
