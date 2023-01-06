import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAM7huQk19txZKTm-525efb0Dv68t9-6CE",
  authDomain: "rn-instagram-clone-mr.firebaseapp.com",
  projectId: "rn-instagram-clone-mr",
  storageBucket: "rn-instagram-clone-mr.appspot.com",
  messagingSenderId: "65697659117",
  appId: "1:65697659117:web:3d63051e620bfd12db74e4"
};

// Initialize Firebase 
//const app = initializeApp(firebaseConfig);  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db= firebase.firestore()

export { firebase, db}