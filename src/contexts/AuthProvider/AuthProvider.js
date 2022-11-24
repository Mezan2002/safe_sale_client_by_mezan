import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //   login by google start
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   login by google end

  //   create user start
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   create user end

  //   login user start
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   login user end

  //   user update start
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  //   user update end

  //   sign out user start
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   sign out user end

  //   set observer start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user is ", currentUser);
    });

    return () => unSubscribe();
  }, []);
  //   set observer end

  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    loginUser,
    updateUser,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
