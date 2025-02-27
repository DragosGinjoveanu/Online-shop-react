import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQBWF4-vkY-Om4f1avINmmK8_Ndd3nMrw",
  authDomain: "online-shop-71f06.firebaseapp.com",
  projectId: "online-shop-71f06",
  storageBucket: "online-shop-71f06.firebasestorage.app",
  messagingSenderId: "117425660949",
  appId: "1:117425660949:web:3b01bb4ec0747337929a1c",
  measurementId: "G-MPQ5X0ZCPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
