import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
