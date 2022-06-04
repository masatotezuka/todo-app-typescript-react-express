"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordPage = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var FormTitleWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 50px;\n"], ["\n  margin-top: 50px;\n"])));
var FormTitle = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  text-align: center;\n"], ["\n  font-weight: bold;\n  text-align: center;\n"])));
var FormWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 30px auto 0px auto;\n"], ["\n  margin: 30px auto 0px auto;\n"])));
var Form = styled_components_1.default.form(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: rgba(128, 128, 128, 0.2);\n  width: 40%;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n"], ["\n  background: rgba(128, 128, 128, 0.2);\n  width: 40%;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n"])));
var Input = styled_components_1.default.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 30px;\n  width: 85%;\n  margin: 10px auto;\n  border: 1px solid #bdbdbd;\n"], ["\n  height: 30px;\n  width: 85%;\n  margin: 10px auto;\n  border: 1px solid #bdbdbd;\n"])));
var Button = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  border: none;\n  padding: 10px 30px;\n  border-radius: 5px;\n  margin: 10px auto;\n  width: 40%;\n"], ["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  border: none;\n  padding: 10px 30px;\n  border-radius: 5px;\n  margin: 10px auto;\n  width: 40%;\n"])));
var MoveToPage = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: #5876a3;\n  justify-content: center;\n  display: flex;\n  text-decoration: none;\n  margin-bottom: 20px;\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  color: #5876a3;\n  justify-content: center;\n  display: flex;\n  text-decoration: none;\n  margin-bottom: 20px;\n  &:hover {\n    opacity: 0.5;\n  }\n"])));
var LinkWrapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 0px auto 20px auto;\n"], ["\n  margin: 0px auto 20px auto;\n"])));
var ResetPasswordPage = function () {
    return (<div>
      <FormTitleWrapper>
        <FormTitle>メールアドレスを入力してください。</FormTitle>
      </FormTitleWrapper>
      <FormWrapper>
        <Form>
          <Input type="email" placeholder="メールアドレス" name="email" required></Input>
          <Button>パスワードをリセット</Button>
        </Form>
        <LinkWrapper>
          <MoveToPage to="/">トップページに戻る</MoveToPage>
        </LinkWrapper>
      </FormWrapper>
    </div>);
};
exports.ResetPasswordPage = ResetPasswordPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=index.js.map