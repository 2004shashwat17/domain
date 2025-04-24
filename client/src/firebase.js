// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <- add this line

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsn-ghIH0YZPxZRyuDkNM9QCqAhorAyAM",
  authDomain: "braindomain-ef8f8.firebaseapp.com",
  projectId: "braindomain-ef8f8",
  storageBucket: "braindomain-ef8f8.firebasestorage.app",
  messagingSenderId: "1006634223637",
  appId: "1:1006634223637:web:c6603a59863923623da61c",
  measurementId: "G-2X79QX1L3F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Add this line to initialize Firestore
const db = getFirestore(app);

// ✅ Now this export will work!
export { db };