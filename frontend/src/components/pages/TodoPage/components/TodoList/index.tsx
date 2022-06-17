import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { TodoItem } from "./TodoItem";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import {
  fetchUserTodo,
  deleteUserTodo,
  changeUserTodoStatus,
} from "../../../../../store/taskSlice";

export const TodoList = () => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchUserTodo());
  }, [dispatch]);

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(deleteUserTodo(id));
    },
    [dispatch]
  );

  const handleChangeTodoStatus = useCallback(
    (id: number, status: boolean) => {
      dispatch(changeUserTodoStatus({ id, status }));
    },
    [dispatch]
  );

  const completedTodos = todos.filter((todo) => todo.status);
  const uncompletedTodos = todos.filter((todo) => !todo.status);
  return (
    <>
      <TodoTableWrapper>
        <StyledTabs>
          <TabList className="tab-lists">
            <Tab className="tab" selectedClassName="active">
              未完了リスト
            </Tab>
            <Tab className="tab" selectedClassName="active">
              完了リスト
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
                {uncompletedTodos.map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id.toString()}
                      todo={todo}
                      deleteTodo={handleDeleteTodo}
                      changeTodoStatus={handleChangeTodoStatus}
                    ></TodoItem>
                  );
                })}
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
                {completedTodos.map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id.toString()}
                      todo={todo}
                      deleteTodo={handleDeleteTodo}
                      changeTodoStatus={handleChangeTodoStatus}
                    ></TodoItem>
                  );
                })}
              </tbody>
            </TodoTable>
          </TabPanel>
        </StyledTabs>
      </TodoTableWrapper>
    </>
  );
};

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

const TodoTable = styled.table`
  width: 100%;
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
