import React from "react";
import ReactDOMClient from "react-dom/client";
// import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";


const container = document.getElementById('root');
// const root = createRoot(container);
const root = ReactDOMClient.createRoot(container);
root.render(<App/>);

