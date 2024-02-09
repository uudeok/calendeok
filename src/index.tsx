import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement);
root.render(<App />);
