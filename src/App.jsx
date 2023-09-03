import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navigator from "./Navigator";
import Dashboard from "./components/admin/Dashboard";

export default function App() {
  return <Dashboard />;
}
