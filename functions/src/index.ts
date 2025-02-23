import {initializeApp} from "firebase-admin/app";
initializeApp();

export {checkUserDomain} from "./user-verification/user-verification"; 
export {preventBannedUsers} from "./user-verification/user-verification"; 
export {onUserCreated} from "./auth-triggers/auth-triggers";
export {onDeleteUser} from "./auth-triggers/auth-triggers";
