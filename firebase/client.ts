// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArHtoD8-q-vlQtzle84XuX5HQ0J6Uguec",
    authDomain: "prepwise-7bd43.firebaseapp.com",
    projectId: "prepwise-7bd43",
    storageBucket: "prepwise-7bd43.firebasestorage.app",
    messagingSenderId: "448426621014",
    appId: "1:448426621014:web:a1672752d3885d9ba663f7",
    measurementId: "G-1P8FY83ZQF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);