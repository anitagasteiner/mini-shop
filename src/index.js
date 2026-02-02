import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom"

const element = <h1>Hello World</h1>;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(element);

// ReactDom.render(element, document.getElementById('root'));

