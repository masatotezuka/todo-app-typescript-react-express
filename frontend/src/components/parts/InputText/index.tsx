import React from "react";
import { StyledInputText } from "./styledInputText";

type Props = {
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  register?: Object;
};

export const InputText: React.FC<Props> = ({
  type,
  placeholder,
  value,
  register,
}) => {
  return (
    <StyledInputText
      type={type}
      placeholder={placeholder}
      value={value}
      {...register}
    ></StyledInputText>
  );
};
