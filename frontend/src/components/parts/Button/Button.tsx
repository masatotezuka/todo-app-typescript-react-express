import React from "react";
import { StyledButton } from "./styledButton";

type Props = {
  child: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button = ({ child, onClick, type }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {child}
    </StyledButton>
  );
};
