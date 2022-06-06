import React from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
const Title = styled.p`
  font-weight: bold;
  text-align: center;
`;

//新規追加
const Input = styled.input`
  height: 30px;
  width: 300px;
  margin: 10px 10px;
  padding: 10px 10px;
  border: 1px solid #bdbdbd;
`;

const DateInput = styled.input`
  height: 30px;
  width: 150px;
  margin: 10px 10px;
  padding: 10px 10px;
  border: 1px solid #bdbdbd;
`;

const TodoAddWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: #5876a3;
  /* padding: 10px 30px; */
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  height: 50px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const TodoTableWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;
//Todoリスト
const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  .tab-lists {
    width: 100%;
    list-style: none;
    padding: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    .tab {
      padding: 20px 0px;
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      color: white;
      font-weight: bold;
      background: #5876a3;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const TodoTable = styled.table`
  width: 100%;
  margin: 0px auto;
  height: 150px;
  border-collapse: collapse;
  text-align: center;
  thead {
    tr {
      font-weight: bold;
      height: 50px;
      border: solid 1px;
      border-left: none;
      border-right: none;
      border-top: none;
      .status-header {
        width: 100px;
      }
      .title-header {
        width: 150px;
      }
      .description-header {
        width: 400px;
      }
      .deadline-header {
        width: 150px;
      }
      .edit-header {
        width: 100px;
      }
    }
  }
  tr {
    border: solid 1px;
    border-left: none;
    border-right: none;
  }
`;

const CheckBox = styled.input`
  transform: scale(1.5);
  &:hover {
    cursor: pointer;
  }
`;

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IconButton = styled.button`
  border: none;
  background-color: rgba(255, 0, 0, 0);
  position: relative;
  padding: 15px 15px;
  &:hover {
    cursor: pointer;
  }
`;

const TrashIcon = styled(BsFillTrashFill)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20px;
  height: 20px;
`;

const EditIcon = styled(BsFillPencilFill)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20px;
  height: 20px;
`;

const MoveToPage = styled(Link)`
  color: #5876a3;
  justify-content: center;
  display: flex;
  text-decoration: none;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.5;
  }
`;

const LinkWrapper = styled.div`
  margin: 0px auto 20px auto;
`;

export const TodoPage: React.FC = () => {
  return (
    <>
      <Title>Todoアプリ</Title>
      <TodoAddWrapper>
        <Input
          type="text"
          placeholder="タスクを入力してください。"
          required
        ></Input>
        <Input
          type="text"
          placeholder="詳細を入力してください。"
          required
        ></Input>
        <DateInput type="date" placeholder="期限日" required></DateInput>
        <Button>タスクの追加</Button>
      </TodoAddWrapper>
      <TodoTableWrapper>
        <StyledTabs>
          <TabList className="tab-lists">
            <Tab className="tab" selectedClassName="active">
              完了リスト
            </Tab>
            <Tab className="tab" selectedClassName="active">
              未完了リスト
            </Tab>
          </TabList>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </StyledTabs>
      </TodoTableWrapper>
      <LinkWrapper>
        <MoveToPage to="/">Topページに戻る</MoveToPage>
      </LinkWrapper>
    </>
  );
};
