import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeDfkJteP4gkmq1Ec_jQAELqFFE3Ujy_M",
  authDomain: "e-commerce-64155.firebaseapp.com",
  projectId: "e-commerce-64155",
  storageBucket: "e-commerce-64155.appspot.com",
  messagingSenderId: "1032524626929",
  appId: "1:1032524626929:web:42a61550459cc1cd37a250",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const db = firebase.firestore();
