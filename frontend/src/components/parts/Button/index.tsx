import styled from "styled-components";
import React from "react";
import { StyledButton } from "./styledButton";

type Props = {
  child: string;
};

export const Button: React.FC<Props> = ({ child }) => {
  return <StyledButton>{child}</StyledButton>;
};
