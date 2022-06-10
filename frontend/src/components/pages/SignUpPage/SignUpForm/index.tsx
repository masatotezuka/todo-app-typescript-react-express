import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { login } from "../../../../store/authSlice";
import { InputText } from "../../../parts/InputText";
import { Button } from "../../../parts/Button/Button";

type SignUpInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SingUpForm: React.FC = () => {
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
        <InputWrapper>
          <NameInputWrapper>
            <InputText
              type="text"
              placeholder="性"
              register={register("firstName", { required: true })}
            ></InputText>
            {errors.firstName && "文字が入力されていません"}
          </NameInputWrapper>
          <NameInputWrapper>
            <InputText
              type="text"
              placeholder="名"
              register={register("lastName", { required: true })}
            ></InputText>
            {errors.firstName && "文字が入力されていません"}
          </NameInputWrapper>
        </InputWrapper>

        <InputWrapper>
          <InputText
            type="email"
            placeholder="メールアドレス"
            register={register("email", { required: true })}
          ></InputText>
          {errors.firstName && "文字が入力されていません"}
        </InputWrapper>

        <InputWrapper>
          <InputText
            type="password"
            placeholder="パスワード"
            register={register("password", { required: true })}
          ></InputText>
          {errors.firstName && "文字が入力されていません"}
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit" child="登録する"></Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NameInputWrapper = styled.div`
  width: 49%;
  display: flex;
`;

const ButtonWrapper = styled.div`
  padding: 0px 200px;
  margin-top: 20px;
`;