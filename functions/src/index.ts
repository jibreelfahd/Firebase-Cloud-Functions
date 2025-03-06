import {initializeApp} from "firebase-admin/app";
initializeApp();

export {checkUserDomain} from "./user-verification/user-verification"; 
export {preventBannedUsers} from "./user-verification/user-verification"; 
export {onUserCreated} from "./auth-triggers/auth-triggers";
export {onDeleteUser} from "./auth-triggers/auth-triggers";
export {onDocCreated} from "./firestore-triggers/index";
export {onDocUpdated} from "./firestore-triggers/index";
export {onDocDeleted} from "./firestore-triggers/index";
export {onWriteToFirestore} from "./firestore-triggers/index";
