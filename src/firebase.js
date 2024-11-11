// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9V1fzLUKDq8nFu2Klump5cmz5vht2Puc",
  authDomain: "private-project-e9377.firebaseapp.com",
  projectId: "private-project-e9377",
  storageBucket: "private-project-e9377.firebasestorage.app",
  messagingSenderId: "1045863172281",
  appId: "1:1045863172281:web:dc26471613d67e457d7368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);