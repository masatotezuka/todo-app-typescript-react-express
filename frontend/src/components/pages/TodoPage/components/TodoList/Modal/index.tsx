import React from "react";
import { Todo } from "../../../../../../api";
import { Button } from "../../../../../parts/Button/Button";
import styled from "styled-components";
import { InputText } from "../../../../../parts/InputText";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../../../../hooks";
import { updateUserTodo } from "../../../../../../store/taskSlice";

type Props = {
  todo: Todo;
  showModal: boolean;
  closeModal: () => void;
};

type Inputs = {
  title: string;
  description: string;
  deadline: Date;
};

export const Modal = React.memo(({ todo, showModal, closeModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: todo.title,
      description: todo.description,
      deadline: todo.deadline,
    },
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const updatedTodo = {
      id: todo.id,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      completedAt: todo.completedAt,
      archivedAt: todo.archivedAt,
    };
    dispatch(updateUserTodo(updatedTodo));
    closeModal();
  };

  return (
    <>
      {showModal ? (
        <>
          <Wrapper>
            <Container>
              <Title>編集</Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <InputTitleWrapper>
                  <InputTitle>タイトル</InputTitle>
                </InputTitleWrapper>
                <InputWrapper>
                  <InputText
                    type="text"
                    register={register("title", { required: true })}
                  ></InputText>
                  {errors.title && "文字が入力されていません"}
                </InputWrapper>
                <InputTitleWrapper>
                  <InputTitle>詳細</InputTitle>
                </InputTitleWrapper>
                <InputWrapper>
                  <InputText
                    type="text"
                    register={register("description", { required: true })}
                  ></InputText>
                  {errors.description && "文字が入力されていません"}
                </InputWrapper>
                <InputTitleWrapper>
                  <InputTitle>日付</InputTitle>
                </InputTitleWrapper>
                <InputWrapper>
                  <InputText
                    type="date"
                    register={register("deadline", { required: true })}
                  ></InputText>
                  {errors.deadline && "文字が入力されていません"}
                </InputWrapper>
                <ButtonsWrapper>
                  <ButtonWrapper>
                    <Button child="保存" type="submit"></Button>
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <Button child="閉じる" onClick={closeModal}></Button>
                  </ButtonWrapper>
                </ButtonsWrapper>
              </Form>
            </Container>
          </Wrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
});

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  height: 400px;
  top: 100px;
  left: 25%;
  right: 25%;
  z-index: 5;
  padding: 30px;
  background-color: #ffffff;
`;

const Title = styled.h2`
  margin: 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 50px;
  display: flex;

  justify-content: center;
`;

const InputTitleWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
`;

const InputTitle = styled.p`
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 30%;
  margin: auto;
`;
