import React from "react";
import styled from "styled-components";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";
import { Link } from "../../parts/Link";
import { Route, Routes } from "react-router-dom";
import { ArchivedList } from "./components/ArchivedList";

export const TodoPage: React.FC = () => {
  const lastName = localStorage.getItem("lastName");

  return (
    <>
      <Wrapper>
        <Title>{lastName}さんのTodoリスト</Title>
        <TodoAddForm></TodoAddForm>
        <Routes>
          <Route path="active" element={<TodoList />}></Route>
          <Route path="archived" element={<ArchivedList />}></Route>
        </Routes>
        <LinkWrapper>
          <Link path="/" text="Topページに戻る"></Link>
          <Routes>
            <Route
              path="archived"
              element={<Link path="/todo/active" text="Todoリストへ"></Link>}
            ></Route>
            <Route
              path="active"
              element={
                <Link path="/todo/archived" text="アーカイブリストへ"></Link>
              }
            ></Route>
          </Routes>
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
  width: 35%;
  margin: 20px auto 0px auto;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
`;
