import React from "react";
import styled from "styled-components";
import { Button } from "../../../../parts/Button/Button";
import { InputText } from "../../../../parts/InputText";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../../../hooks";
import { createUserTodo } from "../../../../../store/taskSlice";

type Inputs = {
  title: string;
  description: string;
  deadline: Date;
};

export const TodoAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(
      createUserTodo({
        title: data.title,
        description: data.description,
        deadline: data.deadline,
      })
    );
    reset();
  };

  return (
    <TodoAddWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper width="300px">
          <InputText
            type="text"
            placeholder="タイトルを入力してください。"
            register={register("title", { required: true })}
          ></InputText>
          {errors.title && "文字が入力されていません"}
        </InputWrapper>
        <InputWrapper width="400px">
          <InputText
            type="text"
            placeholder="詳細を入力してください。"
            register={register("description", { required: true })}
          ></InputText>
          {errors.description && "文字が入力されていません"}
        </InputWrapper>
        <InputWrapper width="150px">
          <InputText
            type="date"
            placeholder="期限日"
            register={register("deadline", { required: true })}
          ></InputText>
          {errors.deadline && "文字が入力されていません"}
        </InputWrapper>
        <ButtonWrapper>
          <Button child="タスクの追加" type="submit"></Button>
        </ButtonWrapper>
      </Form>
    </TodoAddWrapper>
  );
};

const TodoAddWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

type Props = {
  width?: string;
};
const InputWrapper = styled.div`
  width: ${(props: Props) => props.width};
  margin-right: 10px;
  height: 50px;
  display: flex;
`;

const ButtonWrapper = styled.div`
  height: 10%;
  width: 150px;
`;
