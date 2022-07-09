import React from "react";
import styled from "styled-components";
import { TodoAddForm } from "./components/TodoAddForm";
import { TodoList } from "./components/TodoList";
import { Link } from "../../parts/Link";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ArchivedList } from "./components/ArchivedList";
import { logout } from "../../../api";
import config from "../../../config/config.json";
import { Button } from "../../parts/Button/Button";
import { StyledLink } from "../../parts/Link/StyledLink";
export const TodoPage: React.FC = () => {
  const lastName = localStorage.getItem("lastName");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logout(`${config.apiUrl}/logout`);
    navigate("/", { replace: true });
  };

  const { userId } = useParams();

  return (
    <>
      <Wrapper>
        <Title>{lastName}さんのTodoリスト</Title>
        <TodoAddForm userId={userId}></TodoAddForm>
        <Routes>
          <Route path="active" element={<TodoList userId={userId} />}></Route>
          <Route
            path="archived"
            element={<ArchivedList userId={userId} />}
          ></Route>
        </Routes>
        <BottomWrapper>
          <Routes>
            <Route
              path="archived"
              element={
                <StyledLink to={`/todo/${userId}/active`}>
                  Todoリストへ
                </StyledLink>
              }
            ></Route>
            <Route
              path="active"
              element={
                <StyledLink to={`/todo/${userId}/archived`}>
                  アーカイブリストへ
                </StyledLink>
              }
            ></Route>
          </Routes>
          <ButtonWrapper>
            <Button child="ログアウト" onClick={() => logoutHandler()}></Button>
          </ButtonWrapper>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0px;
`;

const BottomWrapper = styled.div`
  margin: 20px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 50px auto 0px auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
