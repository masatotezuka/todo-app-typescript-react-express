import React from "react";
import { StyledInputText } from "./styledInputText";

type Props = {
  type: string;
  placeholder: string;
  required?: string;
};

export const InputText: React.FC<Props> = ({ type, placeholder, required }) => {
  return (
    <StyledInputText
      type={type}
      placeholder={placeholder}
      {...({ required } ? required : undefined)}
    ></StyledInputText>
  );
};
