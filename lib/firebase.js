import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBeDfkJteP4gkmq1Ec_jQAELqFFE3Ujy_M",
  authDomain: "e-commerce-64155.firebaseapp.com",
  projectId: "e-commerce-64155",
  storageBucket: "e-commerce-64155.appspot.com",
  messagingSenderId: "1032524626929",
  appId: "1:1032524626929:web:42a61550459cc1cd37a250",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export { auth, db };