// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyg7vhvmw50fqN9PAaB554pfk44D0CeLo",
  authDomain: "empo-info.firebaseapp.com",
  projectId: "empo-info",
  storageBucket: "empo-info.appspot.com",
  messagingSenderId: "184594687077",
  appId: "1:184594687077:web:c453364abf7b0c99d8d28c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();
