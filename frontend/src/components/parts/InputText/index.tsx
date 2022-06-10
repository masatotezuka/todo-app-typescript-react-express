import React from "react";
import { StyledInputText } from "./styledInputText";

type Props = {
  type: string;
  placeholder: string;
  required?: boolean;
  register?: Object;
};

export const InputText: React.FC<Props> = ({ type, placeholder, register }) => {
  return (
    <StyledInputText
      type={type}
      placeholder={placeholder}
      {...register}
    ></StyledInputText>
  );
};
