import React, { useState } from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Todo } from "../../../../../../api";

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, status: boolean) => void;
};

export const TodoItem = React.memo(
  ({ todo, deleteTodo, changeTodoStatus }: Props) => {
    const [checked, setChecked] = useState<boolean>(todo.status);
    return (
      <>
        <tr>
          <td>
            <CheckBox
              type="checkbox"
              name="todoStatus"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                changeTodoStatus(todo.id, !checked);
              }}
            ></CheckBox>
          </td>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.deadline.toString()}</td>
          <td>
            <IconButtonWrapper>
              <IconButton onClick={() => deleteTodo(todo.id)}>
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
  }
);

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
