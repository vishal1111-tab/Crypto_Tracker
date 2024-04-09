import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CoinProvider } from "./Components/Store/CoinStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinProvider>
      <App />
    </CoinProvider>
  </React.StrictMode>
);
