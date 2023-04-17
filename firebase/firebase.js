import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC85pgngym-Z0HW4DR70MohDGktoYgEMhI",
  authDomain: "todo-app-3861e.firebaseapp.com",
  projectId: "todo-app-3861e",
  storageBucket: "todo-app-3861e.appspot.com",
  messagingSenderId: "681971712887",
  appId: "1:681971712887:web:734be7115208258a11d772"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);