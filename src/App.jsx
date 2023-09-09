import React from "react";
import "./App.css";
import jwt from "jwt-decode";
import Navigator from "./Navigator";
import Dashboard from "./components/admin/Dashboard";
import UserContext from "./components/backend/userContext";
export default function App() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    console.log("....checking oauth");
    try {
      console.log("....try checking oauth");

      const token = await localStorage.getItem("token");
      const decoded = jwt(token);
      console.log(decoded);
      setUser(decoded);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <Dashboard /> : <Navigator />}
    </UserContext.Provider>
  );
}
