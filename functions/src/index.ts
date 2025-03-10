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

// adding items to realtime database in the path /users/{uid}
// (async () => {
//   await addToDatabase("nike");
//   await addToDatabase("adiddas");
//   await addToDatabase("air force");
//   await addToDatabase("puma");
//   process.exit(0);
// })();
export {onDataCreated} from "./realtime-triggers/index";
