import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "../../../../parts/InputText";
import styled from "styled-components";
import { Button } from "../../../../parts/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { loginUser } from "../../../../../store/authSlice";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  console.log("test");

  useEffect(() => {
    console.log(isLoggedIn);

    if (user.id) {
      navigate(`/todo/${user.id}/active`);
    }

    // dispatch(reset());
  }, [user, navigate, dispatch]);

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    await dispatch(loginUser(data));
    // navigate("/", { replace: true });
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="メールアドレス"
            register={register("email", { required: true })}
          ></InputText>
          {errors.email && "文字が入力されていません"}
        </InputWrapper>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="パスワード"
            register={register("password", { required: true })}
          ></InputText>
          {errors.password && "文字が入力されていません"}
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit" child="ログイン"></Button>
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

const ButtonWrapper = styled.div`
  padding: 0px 100px;
  margin-top: 20px;
`;
