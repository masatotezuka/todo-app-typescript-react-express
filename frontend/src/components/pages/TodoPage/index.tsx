import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0px;
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

const Wrapper = styled.div`
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
`;
export const TodoPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Todoアプリ</Title>
        <TodoAddForm></TodoAddForm>
        <TodoList></TodoList>
        <LinkWrapper>
          <MoveToPage to="/">Topページに戻る</MoveToPage>
        </LinkWrapper>
      </Wrapper>
    </>
  );
};
