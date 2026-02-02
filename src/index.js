import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import Product from "./components/product";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Product/>);
