// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDC7yBcoVQ1R6R5TFVE-_IdnT_uRmK9_J8",
    authDomain: "food-king-cc8b3.firebaseapp.com",
    projectId: "food-king-cc8b3",
    storageBucket: "food-king-cc8b3.appspot.com",
    messagingSenderId: "1021641168386",
    appId: "1:1021641168386:web:eef59e1533b2527b4df91b",
    measurementId: "G-QX51CFXY1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
