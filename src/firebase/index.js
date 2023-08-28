import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app);

// export const createTimestamp = () => {
//   const currentDate = new Date();
//   // return firebase.firestore.Timestamp.fromDate(currentDate);
//   const serverStamp = firebase.firestore.Timestamp;
//   const stampNow = serverStamp.fromDate(currentDate)
//   return stampNow
// };

export const registerEvent = (event) => {
  logEvent(analytics, event);
}