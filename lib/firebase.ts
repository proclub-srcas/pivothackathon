import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT8f682MFYQPGJap4LgSCMV_QfebmzS-M",
    authDomain: "pivothackathon.firebaseapp.com",
    projectId: "pivothackathon",
    storageBucket: "pivothackathon.firebasestorage.app",
    messagingSenderId: "818083698508",
    appId: "1:818083698508:web:4a4552c4a52503b707e1e9",
    measurementId: "G-CC94YC2KK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only supported in browser environments)
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, analytics };
