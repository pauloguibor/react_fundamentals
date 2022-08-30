import "./index.css";
import App from "./App";
import {createRoot } from "react-dom/client";
import React from "react";

const el = document.getElementById("root");
const root = createRoot(el)

const tag = <strong>Olá react</strong>;

root.render(<App />);
