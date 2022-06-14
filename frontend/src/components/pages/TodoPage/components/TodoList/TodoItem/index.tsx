import React from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Todo } from "../../../../../../api";

type Props = {
  todo: Todo;
};

export const TodoItem = React.memo(({ todo }: Props) => {
  return (
    <>
      <tr>
        <td>
          <CheckBox type="checkbox" name="todoStatus"></CheckBox>
        </td>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        {/* TODO:日付表示変更 */}
        <td>{todo.deadline.toString()}</td>
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
