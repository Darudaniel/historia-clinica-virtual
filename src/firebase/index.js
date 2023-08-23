import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const provider = new GoogleAuthProvider();

export const auth = getAuth(app)
export const db = getFirestore(app);


// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result)=> {
//       const name = result.user.displayName
//       const email = result.user.email
//       const profilePic = result.user.photoURL

//       // localStorage.setItem("name", name)
//       // localStorage.setItem("email", email)
//       // localStorage.setItem("profilePic", profilePic)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

export const registerEvent = (event) => {
  logEvent(analytics, event);
}