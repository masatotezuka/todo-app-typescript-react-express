"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoPage = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var bs_1 = require("react-icons/bs");
var react_router_dom_1 = require("react-router-dom");
var react_tabs_1 = require("react-tabs");
var Title = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: bold;\n  text-align: center;\n"], ["\n  font-weight: bold;\n  text-align: center;\n"])));
//新規追加
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 30px;\n  width: 300px;\n  margin: 10px 10px;\n  padding: 10px 10px;\n  border: 1px solid #bdbdbd;\n"], ["\n  height: 30px;\n  width: 300px;\n  margin: 10px 10px;\n  padding: 10px 10px;\n  border: 1px solid #bdbdbd;\n"])));
var DateInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 30px;\n  width: 150px;\n  margin: 10px 10px;\n  padding: 10px 10px;\n  border: 1px solid #bdbdbd;\n"], ["\n  height: 30px;\n  width: 150px;\n  margin: 10px 10px;\n  padding: 10px 10px;\n  border: 1px solid #bdbdbd;\n"])));
var TodoAddWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  margin: 0px auto;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  margin: 0px auto;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n"])));
var Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  padding: 10px 30px;\n  display: inline-block;\n  border-radius: 5px;\n  text-decoration: none;\n  height: 50px;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  color: white;\n  font-weight: bold;\n  background: #5876a3;\n  padding: 10px 30px;\n  display: inline-block;\n  border-radius: 5px;\n  text-decoration: none;\n  height: 50px;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var TodoTableWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 80%;\n  margin: 20px auto;\n"], ["\n  width: 80%;\n  margin: 20px auto;\n"])));
//Todoリスト
var StyledTabs = (0, styled_components_1.default)(react_tabs_1.Tabs)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  .tab-lists {\n    width: 100%;\n    list-style: none;\n    padding: 0px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    background-color: aliceblue;\n    .tab {\n      padding: 20px 0px;\n      width: 100%;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n    .active {\n      color: white;\n      font-weight: bold;\n      background: #5876a3;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  .tab-lists {\n    width: 100%;\n    list-style: none;\n    padding: 0px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    background-color: aliceblue;\n    .tab {\n      padding: 20px 0px;\n      width: 100%;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n    .active {\n      color: white;\n      font-weight: bold;\n      background: #5876a3;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"])));
var TodoTable = styled_components_1.default.table(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0px auto;\n  height: 150px;\n  border-collapse: collapse;\n  text-align: center;\n  thead {\n    tr {\n      font-weight: bold;\n      height: 50px;\n      border: solid 1px;\n      border-left: none;\n      border-right: none;\n      border-top: none;\n      .status-header {\n        width: 100px;\n      }\n      .title-header {\n        width: 150px;\n      }\n      .description-header {\n        width: 400px;\n      }\n      .deadline-header {\n        width: 150px;\n      }\n      .edit-header {\n        width: 100px;\n      }\n    }\n  }\n  tr {\n    border: solid 1px;\n    border-left: none;\n    border-right: none;\n  }\n"], ["\n  width: 100%;\n  margin: 0px auto;\n  height: 150px;\n  border-collapse: collapse;\n  text-align: center;\n  thead {\n    tr {\n      font-weight: bold;\n      height: 50px;\n      border: solid 1px;\n      border-left: none;\n      border-right: none;\n      border-top: none;\n      .status-header {\n        width: 100px;\n      }\n      .title-header {\n        width: 150px;\n      }\n      .description-header {\n        width: 400px;\n      }\n      .deadline-header {\n        width: 150px;\n      }\n      .edit-header {\n        width: 100px;\n      }\n    }\n  }\n  tr {\n    border: solid 1px;\n    border-left: none;\n    border-right: none;\n  }\n"])));
var CheckBox = styled_components_1.default.input(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  transform: scale(1.5);\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  transform: scale(1.5);\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var IconButtonWrapper = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n"], ["\n  display: flex;\n  justify-content: space-around;\n"])));
var IconButton = styled_components_1.default.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border: none;\n  background-color: rgba(255, 0, 0, 0);\n  position: relative;\n  padding: 15px 15px;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  border: none;\n  background-color: rgba(255, 0, 0, 0);\n  position: relative;\n  padding: 15px 15px;\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var TrashIcon = (0, styled_components_1.default)(bs_1.BsFillTrashFill)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n"])));
var EditIcon = (0, styled_components_1.default)(bs_1.BsFillPencilFill)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 20px;\n  height: 20px;\n"])));
var MoveToPage = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  color: #5876a3;\n  justify-content: center;\n  display: flex;\n  text-decoration: none;\n  margin-bottom: 20px;\n  &:hover {\n    opacity: 0.5;\n  }\n"], ["\n  color: #5876a3;\n  justify-content: center;\n  display: flex;\n  text-decoration: none;\n  margin-bottom: 20px;\n  &:hover {\n    opacity: 0.5;\n  }\n"])));
var LinkWrapper = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin: 0px auto 20px auto;\n"], ["\n  margin: 0px auto 20px auto;\n"])));
var TodoPage = function () {
    return (<>
      <Title>Todoアプリ</Title>
      <TodoAddWrapper>
        <Input type="text" placeholder="タスクを入力してください。" required></Input>
        <Input type="text" placeholder="詳細を入力してください。" required></Input>
        <DateInput type="date" placeholder="期限日" required></DateInput>
        <Button>タスクの追加</Button>
      </TodoAddWrapper>
      <TodoTableWrapper>
        <StyledTabs>
          <react_tabs_1.TabList className="tab-lists">
            <react_tabs_1.Tab className="tab" selectedClassName="active">
              完了リスト
            </react_tabs_1.Tab>
            <react_tabs_1.Tab className="tab" selectedClassName="active">
              未完了リスト
            </react_tabs_1.Tab>
          </react_tabs_1.TabList>
          <react_tabs_1.TabPanel>
            <TodoTable>
              <thead>
                <tr>
                  <th className="status-header"></th>
                  <th className="title-header">タイトル</th>
                  <th className="description-header">詳細</th>
                  <th className="deadline-header">期日</th>
                  <th className="edit-header"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CheckBox type="checkbox" name="todoStatus"></CheckBox>
                  </td>
                  <td>completed task1</td>
                  <td>completed task2</td>
                  <td>completed task3</td>
                  <td>
                    <IconButtonWrapper>
                      <IconButton>
                        <TrashIcon></TrashIcon>
                      </IconButton>
                      <IconButton>
                        <EditIcon></EditIcon>
                      </IconButton>
                    </IconButtonWrapper>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox type="checkbox" name="todoStatus"></CheckBox>
                  </td>
                  <td>task1</td>
                  <td>task2</td>
                  <td>task3</td>
                  <td>
                    <IconButtonWrapper>
                      <IconButton>
                        <TrashIcon></TrashIcon>
                      </IconButton>
                      <IconButton>
                        <EditIcon></EditIcon>
                      </IconButton>
                    </IconButtonWrapper>
                  </td>
                </tr>
              </tbody>
            </TodoTable>
          </react_tabs_1.TabPanel>
          <react_tabs_1.TabPanel>
            <TodoTable>
              <thead>
                <tr>
                  <th className="status-header"></th>
                  <th className="title-header">タイトル</th>
                  <th className="description-header">詳細</th>
                  <th className="deadline-header">期日</th>
                  <th className="edit-header"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CheckBox type="checkbox" name="todoStatus"></CheckBox>
                  </td>
                  <td>task1</td>
                  <td>task2</td>
                  <td>task3</td>
                  <td>
                    <IconButtonWrapper>
                      <IconButton>
                        <TrashIcon></TrashIcon>
                      </IconButton>
                      <IconButton>
                        <EditIcon></EditIcon>
                      </IconButton>
                    </IconButtonWrapper>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox type="checkbox" name="todoStatus"></CheckBox>
                  </td>
                  <td>task1</td>
                  <td>task2</td>
                  <td>task3</td>
                  <td>
                    <IconButtonWrapper>
                      <IconButton>
                        <TrashIcon></TrashIcon>
                      </IconButton>
                      <IconButton>
                        <EditIcon></EditIcon>
                      </IconButton>
                    </IconButtonWrapper>
                  </td>
                </tr>
              </tbody>
            </TodoTable>
          </react_tabs_1.TabPanel>
        </StyledTabs>
      </TodoTableWrapper>
      <LinkWrapper>
        <MoveToPage to="/">Topページに戻る</MoveToPage>
      </LinkWrapper>
    </>);
};
exports.TodoPage = TodoPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=index.js.map