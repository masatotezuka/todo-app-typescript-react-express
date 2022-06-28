"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundPage = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var NotFoundText = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 60px;\n  font-size: 20px;\n  text-align: center;\n"], ["\n  margin-top: 60px;\n  font-size: 20px;\n  text-align: center;\n"])));
var NotFoundPage = function () {
    return <NotFoundText>お探しのページはみつかりません。</NotFoundText>;
};
exports.NotFoundPage = NotFoundPage;
var templateObject_1;
//# sourceMappingURL=index.js.map