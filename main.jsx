import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App";
import Visualizer from "./Visualizer";

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Visualizer/>
    <App/>
  </React.StrictMode>
);
