import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  </ErrorBoundary>
);

reportWebVitals();
