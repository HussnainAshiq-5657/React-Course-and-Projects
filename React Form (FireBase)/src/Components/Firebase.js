import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAA_pPgYfwX548thwBKIylivfdcRN1osNE',
  authDomain: 'fir-form-7aac1.firebaseapp.com',
  projectId: 'fir-form-7aac1',
  storageBucket: 'fir-form-7aac1.firebasestorage.app',
  messagingSenderId: '528972638610',
  appId: '1:528972638610:web:2008f552c84dbd7b95394b',
  measurementId: 'G-MEE2X215P1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
