import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAlTIiGgXGN-6u5agH61BPANT2G22Pmt-w",
  authDomain: "kikz-769.firebaseapp.com",
  projectId: "kikz-769",
  storageBucket: "kikz-769.firebasestorage.app",
  messagingSenderId: "255920057655",
  appId: "1:255920057655:web:7ca414cea59ce5c08cfeb2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };