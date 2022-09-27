import React from "react";
import ReactDOM from "react-dom/client";

import ReduxProvider from "components/wrappers/ReduxProvider";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);
