import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { IdeasProvider } from "./context/IdeasContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <IdeasProvider>
        <App />
      </IdeasProvider>
    </ThemeProvider>
  </React.StrictMode>
);
