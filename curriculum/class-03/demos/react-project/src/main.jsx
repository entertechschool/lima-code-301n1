import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Projects from "./components/Project.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
