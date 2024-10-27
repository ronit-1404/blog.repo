import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCqWFfJIf5NH2vCxVB4BqihzwkW-EiWd2o",
  authDomain: "quickblog-13cc5.firebaseapp.com",
  projectId: "quickblog-13cc5",
  storageBucket: "quickblog-13cc5.appspot.com",
  messagingSenderId: "295482250765",
  appId: "1:295482250765:web:8a39d040873f985f89e744",
  measurementId: "G-PK0KVRZP7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);