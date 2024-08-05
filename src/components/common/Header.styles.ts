// src/components/common/Header.styles.ts
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(#000, #000, rgba(0, 0, 0, 0));
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  // flex-direction: column;
  // margin-bottom: 16px;
  min-height: 90px;

  div {
    display: flex;
    align-items: baseline;
    padding: 0 10px;
    // justify-content: space-between;
    width: 100%;
    min-height: 40px;
    // margin-bottom: 15px;
  }

  .full {
    background-color: #fff;
  }

  div > div {
    display: flex;
    gap: 10px;
    margin: 0;
  }

  img {
    width: 16px;
    height: 16px;
  }

  h1 {
    font-size: 1.5rem;
  }
`;
