import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { MdArchive } from "react-icons/md";
import { Todo } from "../../../../../../api";
import { Modal } from "../Modal";

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, completedAt: Date) => void;
  archiveTodo: (id: number, archivedAt: Date | null) => void;
};

export const TodoItem = React.memo(
  ({ todo, deleteTodo, changeTodoStatus, archiveTodo }: Props) => {
    const isCompleted = todo.completedAt ? true : false;
    const [checked, setChecked] = useState<boolean>(isCompleted);
    const [showModal, setShowModal] = useState<boolean>(false);

    const updateStatus = useCallback(() => {
      setChecked(() => !checked);
      changeTodoStatus(todo.id, todo.completedAt);
      return;
    }, [checked, changeTodoStatus, todo.id, todo.completedAt]);

    const openModal = useCallback(() => {
      setShowModal(true);
    }, []);
    const closeModal = useCallback(() => {
      setShowModal(false);
    }, []);

    return (
      <>
        <tr>
          <td>
            <CheckBox
              id={todo.id.toString()}
              type="checkbox"
              name="todoStatus"
              checked={checked}
              onChange={updateStatus}
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
              <IconButton onClick={openModal}>
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton onClick={() => archiveTodo(todo.id, todo.archivedAt)}>
                <ArchiveIcon></ArchiveIcon>
              </IconButton>
            </IconButtonWrapper>
          </td>
          <td>
            <Modal
              todo={todo}
              showModal={showModal}
              closeModal={closeModal}
            ></Modal>
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

const ArchiveIcon = styled(MdArchive)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20px;
  height: 20px;
`;
