import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>
);
