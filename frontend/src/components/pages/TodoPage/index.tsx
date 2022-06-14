import React, { useEffect } from "react";
import styled from "styled-components";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";
import { Link } from "../../parts/Link";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchUserTodo } from "../../../store/taskSlice";

export const TodoPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchUserTodo());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Title>Todoアプリ</Title>
        <TodoAddForm></TodoAddForm>
        <TodoList todos={todos}></TodoList>
        <LinkWrapper>
          <Link path="/" text="Topページに戻る"></Link>
        </LinkWrapper>
      </Wrapper>
    </>
  );
};

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0px;
`;

const LinkWrapper = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
`;
