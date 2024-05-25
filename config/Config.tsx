// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqRbxTLEeIVxw7bhvfR3GVkMVPVdNA9L4",
  authDomain: "app-movil-65eff.firebaseapp.com",
  databaseURL: "https://app-movil-65eff-default-rtdb.firebaseio.com",
  projectId: "app-movil-65eff",
  storageBucket: "app-movil-65eff.appspot.com",
  messagingSenderId: "926049478526",
  appId: "1:926049478526:web:8dff0fa1a01648dba3352f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase()