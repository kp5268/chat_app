import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyBdTzic5n62u1cbkM_oCo2Q5jeqG0EM1AI",
  authDomain: "project1-140ba.firebaseapp.com",
  projectId: "project1-140ba",
  storageBucket: "project1-140ba.appspot.com",
  messagingSenderId: "241243482487",
  appId: "1:241243482487:web:0cb6f3545b821924781972",
  measurementId: "G-8B0RSJE1N0"
};
// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
