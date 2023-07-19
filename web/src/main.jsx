import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./context/AuthContext";
import { CheckUSersProvider } from "./context/UsersContext";

import setupInterceptors from "./utils/setupInterceptor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CheckUSersProvider>
          <App />
        </CheckUSersProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

setupInterceptors();
