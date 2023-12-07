import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw9L_inI_CFAyemS2dz_hKHO5vuiRGaTA",
  authDomain: "netflix-clone-fc883.firebaseapp.com",
  projectId: "netflix-clone-fc883",
  storageBucket: "netflix-clone-fc883.appspot.com",
  messagingSenderId: "466542472946",
  appId: "1:466542472946:web:74a0f0d95c277842e32a6b",
  measurementId: "G-103RVLGZW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
