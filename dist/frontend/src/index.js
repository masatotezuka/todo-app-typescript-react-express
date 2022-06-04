"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
// import { Provider } from "react-redux";
// import { store } from "./app/store";
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
require("./index.css");
var ErrorBoundary_1 = require("./components/ErrorBoundary");
var react_router_dom_1 = require("react-router-dom");
var container = document.getElementById("root");
var root = (0, client_1.createRoot)(container);
root.render(<ErrorBoundary_1.default>
    <react_1.default.StrictMode>
      <react_router_dom_1.BrowserRouter>
        {/* <Provider store={store}> */}
        <App_1.default />
        {/* </Provider> */}
      </react_router_dom_1.BrowserRouter>
    </react_1.default.StrictMode>
  </ErrorBoundary_1.default>);
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map