import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navigator from "./Navigator";
import Dashboard from "./components/admin/Dashboard";
import UserContext from "./components/backend/userContext";
export default function App() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    try {
      const token = await localStorage.getItem("token");
      const decoded = jwt(token);
      setUser(decoded);
    } catch (error) {}
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <Dashboard /> : <Navigator />}
    </UserContext.Provider>
  );
}
