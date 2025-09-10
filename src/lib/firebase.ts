
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5dTyFu7dwAd_0Cz6yCPTE1F8z0KvzbNg",
  authDomain: "cloudx-cloudascend.firebaseapp.com",
  projectId: "cloudx-cloudascend",
  storageBucket: "cloudx-cloudascend.appspot.com",
  messagingSenderId: "546113219928",
  appId: "1:546113219928:web:1b582e7300617490f9492d",
  measurementId: "G-GSPZXXWWEC"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics, storage };
