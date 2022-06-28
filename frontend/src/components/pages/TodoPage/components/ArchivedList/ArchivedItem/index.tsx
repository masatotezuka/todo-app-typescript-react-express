import React from "react";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import { MdUnarchive } from "react-icons/md";
import { Todo } from "../../../../../../api";

type Props = {
  todo: Todo;
  activeTodo: (id: number, archivedAt: Date | null) => void;
  deleteTodo: (id: number) => void;
};

export const ArchivedItem = React.memo(
  ({ todo, activeTodo, deleteTodo }: Props) => {
    return (
      <>
        <tr>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.deadline.toString()}</td>
          <td>
            <IconButtonWrapper>
              <IconButton onClick={() => deleteTodo(todo.id)}>
                <TrashIcon></TrashIcon>
              </IconButton>
              <IconButton onClick={() => activeTodo(todo.id, todo.archivedAt)}>
                <UnarchiveIcon></UnarchiveIcon>
              </IconButton>
            </IconButtonWrapper>
          </td>
        </tr>
      </>
    );
  }
);

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

const UnarchiveIcon = styled(MdUnarchive)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20px;
  height: 20px;
`;
