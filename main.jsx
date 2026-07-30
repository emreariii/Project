import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Tailwind buradan devreye girer
import App from "./App.jsx";
import "./index.css";

// Uygulamayı BrowserRouter ile sarıyoruz ki sayfalar arası (route) geçiş çalışsın.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
