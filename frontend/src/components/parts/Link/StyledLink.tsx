import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #5876a3;
  justify-content: center;
  display: flex;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;
