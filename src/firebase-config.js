// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-jkOpbO0HH1nu6fmtR-sqAS4pLg_tTc8',
  authDomain: 'invitation-3ab6f.firebaseapp.com',
  projectId: 'invitation-3ab6f',
  storageBucket: 'invitation-3ab6f.appspot.com',
  messagingSenderId: '868764474017',
  appId: '1:868764474017:web:3dbffd85a8c90051dc6ee0',
  measurementId: 'G-HJ2YQV1PDD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
