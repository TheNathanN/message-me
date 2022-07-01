// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJ_ID,
  storageBucket: process.env.NEXT_PUBLIC_STOR_BUCK,
  messagingSenderId: process.env.NEXT_PUBLIC_MESS_SEND_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEAS_ID,
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
