import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-H0m_whmd43UzqGJ_oAlhah6VlSDybm4",
  authDomain: "react-form-1417d.firebaseapp.com",
  databaseURL:
    "https://react-form-1417d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-form-1417d",
  storageBucket: "react-form-1417d.appspot.com",
  messagingSenderId: "69206498538",
  appId: "1:69206498538:web:eb17bd94d4b23e531ecb93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
