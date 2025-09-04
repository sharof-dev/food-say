import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initTheme } from "./utils/theme";
import "./index.css";

initTheme(); // 🔥 Muhim!

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
