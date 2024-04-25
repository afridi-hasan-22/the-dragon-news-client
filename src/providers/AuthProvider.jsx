import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true)
  const [user,setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth, loggedUser => {
      console.log('auth state changed of', loggedUser);
      setUser(loggedUser);
      setLoading(false)
    });
    return () => {
      return unsubscibe()
    }
  },[])
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer></ToastContainer>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
