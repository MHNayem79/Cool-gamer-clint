// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa4GYMySlWr0EYiAd7E6kzFxKuvrK4psQ",
    authDomain: "chill-gamer-824d9.firebaseapp.com",
    projectId: "chill-gamer-824d9",
    storageBucket: "chill-gamer-824d9.firebasestorage.app",
    messagingSenderId: "676848155035",
    appId: "1:676848155035:web:1f14026fc83e53ebda893e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);