import React from "react";
import { StyledButton } from "./styledButton";

type Props = {
  child: string;
  onClick?: () => void;
  type?: string;
};

export const Button = ({ child, onClick, type }: Props) => {
  return (
    <StyledButton {...type} onClick={onClick}>
      {child}
    </StyledButton>
  );
};
