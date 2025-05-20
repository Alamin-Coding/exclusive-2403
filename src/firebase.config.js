// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpeic3fZAPwdlaPLyj9xK7vpBOfaT_9M8",
  authDomain: "exclusive-2403.firebaseapp.com",
  projectId: "exclusive-2403",
  storageBucket: "exclusive-2403.firebasestorage.app",
  messagingSenderId: "392171807331",
  appId: "1:392171807331:web:9fd60be6a6144a3af3ce56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
