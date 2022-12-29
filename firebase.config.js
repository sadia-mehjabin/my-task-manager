// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEzHl8-hY219IrX2s0ZGuHP49ea8Ffi7c",
  authDomain: "my-task-manager-dff49.firebaseapp.com",
  projectId: "my-task-manager-dff49",
  storageBucket: "my-task-manager-dff49.appspot.com",
  messagingSenderId: "350992068722",
  appId: "1:350992068722:web:21ae9cdb5aae91e16a12eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;