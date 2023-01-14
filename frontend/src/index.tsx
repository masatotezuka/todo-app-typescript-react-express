import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const container = document.getElementById("root")!;
const root = createRoot(container);

export const StyledToastContainer = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={4000}
      hideProgressBar={true}
      style={{ width: "450px", fontSize: "14px" }}
    ></ToastContainer>
  );
};

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <StyledToastContainer />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>
);
