import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { login } from "../../../store/authSlice";
import { Link } from "../../../components/parts/Link";
import { SingUpForm } from "./SignUpForm";

export const SignUpPage = () => {
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <FormTitle>新規登録</FormTitle>
          <SingUpForm></SingUpForm>
        </FormWrapper>
        <LinkWrapper>
          <Link path="/" text="Topページに戻る"></Link>
        </LinkWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 50px 400px 0px 400px;
`;

const FormWrapper = styled.div`
  background: rgba(128, 128, 128, 0.2);
  padding: 20px 30px 20px 30px;
`;

const FormTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const LinkWrapper = styled.div`
  margin: 10px auto 0px auto;
`;
