import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { login } from "../../../store/authSlice";
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

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: #5876a3;
  padding: 10px 30px;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  margin: 20px auto;
  border: none;
  width: 30%;
`;
const Input = styled.input`
  height: 30px;
  width: 85%;
  margin: 10px auto;
  border: 1px solid #bdbdbd;
`;

const HalfInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HalfInput = styled(Input)`
  width: 40%;
  margin: 10px 10px;
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

type SignUpInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    console.log(data);
    const response = await axios.post(
      "http://localhost:8000/api/sign-up",
      data
    );
    // if (response.data.authorization) {
    console.log(response.data);
    dispatch(login());
    navigate("/todo", { replace: true });
    // } else {
    // }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>新規登録</FormTitle>
        <HalfInputWrapper>
          <HalfInput
            type="text"
            placeholder="姓"
            required
            {...register("firstName")}
          ></HalfInput>
          <HalfInput
            type="text"
            placeholder="名"
            required
            {...register("lastName")}
          ></HalfInput>
        </HalfInputWrapper>
        <Input
          type="email"
          placeholder="メールアドレス"
          required
          {...register("email")}
        ></Input>
        <Input
          type="password"
          placeholder="パスワード（半角英数数字8文字以上）"
          required
          //8文字以上設定する設定必要あり
          pattern="^[a-zA-Z\d]{8,100}"
          {...register("password")}
        ></Input>
        <Button type="submit">登録する</Button>
        <LinkWrapper>
          <MoveToPage to="/">Topページに戻る</MoveToPage>
        </LinkWrapper>
      </Form>
    </>
  );
};
