// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfQOk2YyQ4WPYQSleG2PR9meiC4m_hnvU",
  authDomain: "autenticationfct.firebaseapp.com",
  projectId: "autenticationfct",
  storageBucket: "autenticationfct.appspot.com",
  messagingSenderId: "555214888529",
  appId: "1:555214888529:web:2bae0c101d51a96333a270"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase