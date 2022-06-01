import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  background: rgba(128, 128, 128, 0.2);
  width: 40%;
  margin: 60px auto 0px auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 30px;
  width: 85%;
  margin: 10px auto;
  border: 1px solid #bdbdbd;
`;

type Props = {
  color?: "primary";
};

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: ${(props: Props) => (props.color ? "#5876a3" : "white")};
  padding: 10px 30px;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  margin: 20px auto;
  border: none;
  width: 30%;
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

export const LoginPage: React.FC = () => {
  return (
    <div>
      <Form>
        <FormTitle>ログイン</FormTitle>
        <Input
          type="email"
          placeholder="メールアドレス"
          name="email"
          required
        ></Input>
        <Input
          type="password"
          placeholder="パスワード（半角英数数字8文字以上）"
          name="password"
          required
          //8文字以上設定する設定必要あり
          pattern="^[a-zA-Z\d]{8,100}"
        ></Input>
        <Button color="primary">ログイン</Button>
        <LinkWrapper>
          <MoveToPage to="/">トップページに戻る</MoveToPage>
        </LinkWrapper>
        <LinkWrapper>
          <MoveToPage to="/reset-password">パスワードを忘れた</MoveToPage>
        </LinkWrapper>
      </Form>
    </div>
  );
};
