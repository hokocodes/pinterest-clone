// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZIBtaYAinpvg092cPkOsZsdG9MUfNCHY",
  authDomain: "pinterest-clone-efe05.firebaseapp.com",
  projectId: "pinterest-clone-efe05",
  storageBucket: "pinterest-clone-efe05.appspot.com",
  messagingSenderId: "583283702578",
  appId: "1:583283702578:web:66516f524bbebdb0c1752b",
  measurementId: "G-7BGM6BN5JK"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;