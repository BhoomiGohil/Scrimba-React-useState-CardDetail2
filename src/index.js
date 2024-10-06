import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
// Selecting the root element from the HTML document where the app will be rendered
const rootElement = document.querySelector("#root");

// Throwing an error if the root element is not found
if (!rootElement) throw new Error("Failed to find the root h1");

// Creating a root for the React application using the selected element
const root = createRoot(rootElement);

// Rendering the MainContent component into the root element
root.render(<MainContent />);
