import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("USER"));
    if (user && user !== "") {
      setUser(user);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
