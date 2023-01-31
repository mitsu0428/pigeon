import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhfDShG1x-2BsXM8sUF41Vnpvl4H2WilA",
  authDomain: "pigeon-54650.firebaseapp.com",
  projectId: "pigeon-54650",
  storageBucket: "pigeon-54650.appspot.com",
  messagingSenderId: "160111407523",
  appId: "1:160111407523:web:ba8ae5ce661b1e8ef3ea16",
  measurementId: "G-N8H5184XX7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export default storage;
export { auth, signInWithGoogle };
