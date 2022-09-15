import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    width: 100%;
  }

  body {
    background-color: white;
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-image: repeating-conic-gradient(from 200deg at 50% 50%, #E000FF59 92%, #073AFF00 100%),repeating-conic-gradient(from 0deg at 204% 215%, #2000FFB8 21%, #073AFF14 39%),linear-gradient(0deg, #341D33FF 0%, #073AFF00 100%),radial-gradient(99% 99% at 21% 78%, #7B20E2FF 0%, #073AFF00 100%),radial-gradient(160% 154% at 433px -127px, #FF06FFF0 0%, #FF06FFF0 9%, #FF06FFF0 14%, #FF06FFF0 20%, #FF06FFF0 22%, #FF06FFF0 37%, #FF06FFF0 60%, #073AFFFF 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: sans-serif;
}
`;

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  font-weight: bolder;
`;
