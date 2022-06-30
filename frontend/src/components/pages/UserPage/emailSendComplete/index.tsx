import React from "react";
import styled from "styled-components";
import { Link } from "../../../parts/Link";

export const EmailSendComplete = () => {
  return (
    <>
      <LinkWrapper>
        <p>メールにしたがって、12時間以内にパスワードを設定してください。</p>
        <Link path="/" text="Topページに戻る"></Link>
      </LinkWrapper>
    </>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px auto 0px auto;
  padding: 0px;
`;
