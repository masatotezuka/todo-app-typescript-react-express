import React from "react";
import { StyledLink } from "./StyledLink";

type Props = {
  path: string;
  text: string;
};

export const Link: React.FC<Props> = ({ path, text }) => {
  return <StyledLink to={path}>{text}</StyledLink>;
};
