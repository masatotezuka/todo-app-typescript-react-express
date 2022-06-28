import React from "react";
import { StyledButtonLink } from "./styledButtonLink";

type Props = {
  path: string;
  text: string;
};

export const ButtonLink = ({ path, text }: Props) => {
  return <StyledButtonLink to={path}>{text}</StyledButtonLink>;
};
