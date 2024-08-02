import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import {addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQbWxeQiRLNeEXObsmHDv8MaHXZZX2BV0",
  authDomain: "business-model-for-iot.firebaseapp.com",
  projectId: "business-model-for-iot",
  storageBucket: "business-model-for-iot.appspot.com",
  messagingSenderId: "488896103585",
  appId: "1:488896103585:web:4cd3a696f6e807b5f05ce0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}
const login = async(email, password)  => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    try {
        auth.signOut();
        // Clear any additional app data
        localStorage.removeItem('your-app-data');
        sessionStorage.removeItem('your-app-session-data');
        return true;
      } catch (error) {
        console.error('Error signing out: ', error);
        return false;
      }
}

export {auth, db, login, signup, logout};

