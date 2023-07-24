import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./context/AuthContext";
import { CheckUsersProvider } from "./context/UsersContext";

import setupInterceptors from "./utils/setupInterceptor";
import { IncomeProvider } from "./context/IncomeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CheckUsersProvider>
          <IncomeProvider>
            <App />
          </IncomeProvider>
        </CheckUsersProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

setupInterceptors();
