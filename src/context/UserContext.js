import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (credentials) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const register = async (credentials) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const fetchProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setEmail(data.email);
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, fetchProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
