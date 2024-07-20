import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJwOcb2C9PZzRSMhEGdU5raH8MlW1L1eA",
  authDomain: "gamedealwizard-aa04b.firebaseapp.com",
  projectId: "gamedealwizard-aa04b",
  storageBucket: "gamedealwizard-aa04b.appspot.com",
  messagingSenderId: "177132408340",
  appId: "1:177132408340:web:1fc403e49a92bca031e101"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const dealsCollection = collection(db, "deals")