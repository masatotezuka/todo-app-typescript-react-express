"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPage = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var ButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  margin-top: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])));
var Button = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  padding: 10px 30px;\n  display: inline-block;\n  border-radius: 5px;\n  text-decoration: none;\n  margin-bottom: 30px;\n"], ["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  padding: 10px 30px;\n  display: inline-block;\n  border-radius: 5px;\n  text-decoration: none;\n  margin-bottom: 30px;\n"])));
var TopPage = function () {
    return (<>
      <ButtonWrapper>
        <Button to="/sign-up">新規登録</Button>
        <Button to="/login">ログイン</Button>
      </ButtonWrapper>
    </>);
};
exports.TopPage = TopPage;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map