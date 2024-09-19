
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut} from "firebase/auth";
  import {
    addDoc,collection,getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCajvYJp7KPjFSCboWj0Etfx6bXasBGqxA",
  authDomain: "netflix-clone-6039f.firebaseapp.com",
  projectId: "netflix-clone-6039f",
  storageBucket: "netflix-clone-6039f.appspot.com",
  messagingSenderId: "902825019789",
  appId: "1:902825019789:web:0d1dcd9fbc2bdbb6c8d5c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }

} 

const login = async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async () => {
  signOut(auth);
}

export {auth , db , login , signup , logout};