import React from "react";
import styled from "styled-components";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";
import { Link } from "../../parts/Link";

export const TodoPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Todoアプリ</Title>
        <TodoAddForm></TodoAddForm>
        <TodoList></TodoList>
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
