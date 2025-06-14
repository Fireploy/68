import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext.jsx";
import ModalProvider from "./context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 // <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  //</React.StrictMode>
);
