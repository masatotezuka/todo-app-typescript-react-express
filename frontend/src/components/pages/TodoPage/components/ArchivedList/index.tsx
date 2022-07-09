import React, { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import {
  archivedTodoSelector,
  deleteUserTodo,
  toggleArchiveUserTodo,
} from "../../../../../store/taskSlice";
import { ArchivedItem } from "./ArchivedItem";

export const ArchivedList = ({ userId }: { userId: string | undefined }) => {
  const archivedTodos = useAppSelector(archivedTodoSelector);
  const dispatch = useAppDispatch();

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(deleteUserTodo(id));
    },
    [dispatch]
  );
  const handleActiveTodo = useCallback(
    (id: number, archivedAt: Date | null) => {
      dispatch(toggleArchiveUserTodo({ id, archivedAt }));
    },
    [dispatch]
  );

  return (
    <>
      <p>アーカイブリスト</p>
      <TodoTable>
        <thead>
          <tr>
            <th className="title-header">タイトル</th>
            <th className="description-header">詳細</th>
            <th className="deadline-header">期日</th>
            <th className="edit-header"></th>
          </tr>
        </thead>
        <tbody>
          {archivedTodos.map((todo) => {
            return (
              <ArchivedItem
                key={todo.id.toString()}
                todo={todo}
                activeTodo={handleActiveTodo}
                deleteTodo={handleDeleteTodo}
              ></ArchivedItem>
            );
          })}
        </tbody>
      </TodoTable>
    </>
  );
};

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
