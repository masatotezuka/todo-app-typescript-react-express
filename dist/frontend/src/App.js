"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var TopPage_1 = require("./pages/TopPage");
var TodoPage_1 = require("./pages/TodoPage");
var SignUpPage_1 = require("./pages/SignUpPage");
var LoginPage_1 = require("./pages/LoginPage");
var NotFoundPage_1 = require("./pages/NotFoundPage");
var UserPage_1 = require("./pages/UserPage");
var App = function () {
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<TopPage_1.TopPage />}/>
        <react_router_dom_1.Route path="/sign-up" element={<SignUpPage_1.SignUpPage />}/>
        <react_router_dom_1.Route path="login" element={<LoginPage_1.LoginPage />}/>
        {/* リセットページ */}
        <react_router_dom_1.Route path="/todo" element={<TodoPage_1.TodoPage />}/>
        <react_router_dom_1.Route path="/reset-password" element={<UserPage_1.ResetPasswordPage />}/>
        <react_router_dom_1.Route path="*" element={<NotFoundPage_1.NotFoundPage />}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </>);
};
exports.default = App;
//# sourceMappingURL=App.js.map