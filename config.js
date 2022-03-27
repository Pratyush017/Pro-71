import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAsbht__bhGbXmd4vLyES-SWJfdJmvKX4s",
  authDomain: "e-ride-stage-4-c3b47.firebaseapp.com",
  projectId: "e-ride-stage-4-c3b47",
  storageBucket: "e-ride-stage-4-c3b47.appspot.com",
  messagingSenderId: "733199350605",
  appId: "1:733199350605:web:f5df972f9f95a50256d504"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
