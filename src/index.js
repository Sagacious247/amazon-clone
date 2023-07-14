import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateProvider from './StateProvider'
// import reducer, { initialState } from "./reducer";
// import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
    {/* <StateProvider initialState={initialState} reducer={reducer}>
    </StateProvider> */}
  </React.StrictMode>
);