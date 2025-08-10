import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeUser);
    return unSubscribe;
  }, []);

  const initializeUser = async (user) => {
    // Jodi keo login kore tokhon user true hobe and e parameter ta amader provice kore OnAuthStateChanged function thekei jokhon call back hishebe initializeUser ke call kora hoy
    setLoading(true);
    if (user) {
      setCurrentUser({ ...user });
      const dataSnap = await getDoc(doc(db, "users", user.uid));
      console.log("This is from AuthContext, Log of DataSnap: ", dataSnap);
      const role = dataSnap.data().role;
      setRole(role);
      setUserLoggedIn(true);
    } else {
      setRole("");
      setUserLoggedIn(null);
      setCurrentUser(null);
    }
    setLoading(false);
  };

  const value = {
    role,
    userLoggedIn,
    loading,
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
