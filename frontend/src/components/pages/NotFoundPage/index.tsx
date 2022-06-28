import React from "react";
import styled from "styled-components";

const NotFoundText = styled.p`
  margin-top: 60px;
  font-size: 20px;
  text-align: center;
`;

export const NotFoundPage: React.FC = () => {
  return <NotFoundText>お探しのページはみつかりません。</NotFoundText>;
};
