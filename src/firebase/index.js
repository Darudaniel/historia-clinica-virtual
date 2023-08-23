import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app);

export const registerEvent = (event) => {
  logEvent(analytics, event);
}