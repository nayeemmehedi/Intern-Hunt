// import * as firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyAXYZTpgPfqD1ngzYEYmNUG7T2aGTETPQM",
//     authDomain: "intern-hunt-1b605.firebaseapp.com",
//     projectId: "intern-hunt-1b605",
//     storageBucket: "intern-hunt-1b605.appspot.com",
//     messagingSenderId: "604339210625",
//     appId: "1:604339210625:web:4035105311f93d37250080",
//     measurementId: "G-21WH0021EW"
// };

// firebase.initializeApp(firebaseConfig);

// auth = firebase.auth();

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const   auth

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXYZTpgPfqD1ngzYEYmNUG7T2aGTETPQM",
  authDomain: "intern-hunt-1b605.firebaseapp.com",
  projectId: "intern-hunt-1b605",
  storageBucket: "intern-hunt-1b605.appspot.com",
  messagingSenderId: "604339210625",
  appId: "1:604339210625:web:4035105311f93d37250080",
  measurementId: "G-21WH0021EW"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
