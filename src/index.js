import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_m6G7teo5ZcNwQO0kT0JyvCkp-4P7iFM",
    authDomain: "portfolio-381a3.firebaseapp.com",
    projectId: "portfolio-381a3",
    storageBucket: "portfolio-381a3.appspot.com",
    messagingSenderId: "431191281940",
    appId: "1:431191281940:web:8909658b3f39593a4d7201",
    measurementId: "G-F29TSYK6EG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
