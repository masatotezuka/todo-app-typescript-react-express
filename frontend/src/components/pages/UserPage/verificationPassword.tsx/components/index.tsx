import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { verificationPassword, VerificationPassword } from "../../../../../api";
import { Button } from "../../../../parts/Button/Button";
import { InputText } from "../../../../parts/InputText";
import config from "../../../../../config/config.json";
import { useNavigate } from "react-router-dom";
export const VerificationPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationPassword>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<VerificationPassword> = async (data) => {
    try {
      await verificationPassword(
        `${config.apiUrl}/user/verification-password`,
        data
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FromTitle>新しいパスワードを入力してください</FromTitle>
        <InputText
          type="password"
          placeholder="パスワード"
          register={register("password", { required: true })}
        ></InputText>
        <ErrorText>{errors.password && "文字が入力されていません。"}</ErrorText>
        <ButtonWrapper>
          <Button child="パスワードを登録" type="submit"></Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FromTitle = styled.p`
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  margin: 30px auto 0px auto;
`;

const ErrorText = styled.p`
  color: red;
`;
