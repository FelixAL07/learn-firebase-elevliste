
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
//NB: Pass på at versjonsnummeret i URL-en (9.6.1) er det samme som versjonsnummeret fra koden du kopierte da du satte opp webappen din (f.eks. 10.0.1).
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKBtoc-lSq7lJffboJw8kNqrpX_AUgFhc",
    authDomain: "elevliste-1ef4a.firebaseapp.com",
    projectId: "elevliste-1ef4a",
    storageBucket: "elevliste-1ef4a.appspot.com",
    messagingSenderId: "146049804328",
    appId: "1:146049804328:web:69bd82d3e24d2449dead1d",
    measurementId: "G-XEL2P0B6KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export { db };