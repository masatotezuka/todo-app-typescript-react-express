import React from "react";
import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { TodoItem } from "../TodoItem";

export type Todo = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  status: boolean;
};

export const TodoList: React.FC = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: "task1",
      description: "test1",
      deadline: new Date(),
      status: true,
    },
    {
      id: 3,
      title: "task1",
      description: "test1",
      deadline: new Date(),
      status: true,
    },
    {
      id: 4,
      title: "task1",
      description: "test1",
      deadline: new Date(),
      status: true,
    },
    {
      id: 2,
      title: "task2",
      description: "test2",
      deadline: new Date(),
      status: false,
    },
  ];

  const completedTodos: Todo[] = todos.filter((todo) => todo.status);
  const uncompletedTodos: Todo[] = todos.filter((todo) => !todo.status);
  return (
    <>
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
            {/* <TodoItem todos={completedTodos}></TodoItem> */}
          </TabPanel>
          <TabPanel>
            {/* <TodoItem todos={completedTodos}></TodoItem> */}
          </TabPanel>
        </StyledTabs>
      </TodoTableWrapper>
    </>
  );
};

//Todoリスト
const TodoTableWrapper = styled.div`
  margin-top: 30px;
`;
const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  .tab-lists {
    margin-top: 0px;
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
