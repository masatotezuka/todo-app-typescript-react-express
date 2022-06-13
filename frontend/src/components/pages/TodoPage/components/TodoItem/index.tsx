import React from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Todo } from "../TodoList";

type Props = {
  todos: Todo[];
};

export const TodoItem = React.memo((props: Props) => {
  return (
    <>
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
          {props.todos.map((todo) => {
            return (
              <>
                <tr key={todo.id.toString()}>
                  <td key={todo.id.toString()}>
                    <CheckBox type="checkbox" name="todoStatus"></CheckBox>
                  </td>
                  <td key={todo.id.toString()}>{todo.title}</td>
                  <td key={todo.id.toString()}>{todo.description}</td>
                  {/* TODO:日付表示変更 */}
                  <td key={todo.id.toString()}>{todo.deadline.toString()}</td>
                  <td key={todo.id.toString()}>
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
              </>
            );
          })}
        </tbody>
      </TodoTable>
    </>
  );
});

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
