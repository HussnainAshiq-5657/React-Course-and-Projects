// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_KEY',
//   authDomain: 'YOUR_DOMAIN',
//   projectId: 'YOUR_ID',
//   storageBucket: 'YOUR_BUCKET',
//   messagingSenderId: 'YOUR_MSG_ID',
//   appId: 'YOUR_APP_ID',
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDD7oCj5PovKCnkX6n3DiRwZlhmeWnutRg',
  authDomain: 'react-form-9193f.firebaseapp.com',
  projectId: 'react-form-9193f',
  storageBucket: 'react-form-9193f.firebasestorage.app',
  messagingSenderId: '334445152105',
  appId: '1:334445152105:web:212841347c41d174499ff8',
  measurementId: 'G-VQ9Z51N3Q2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
