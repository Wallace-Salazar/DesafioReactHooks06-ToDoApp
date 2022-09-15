import styled from "styled-components";
import { Btn } from "./GlobalStyles";

export const Item = styled.div`
  width: 100%;
  padding: 2%;
  margin: 3% 0;
  background: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  width: 85%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;

  span {
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 20px;
    border: 1px solid black;
    text-align: center;
    transition: 0.7s ease-in-out;
  }

  p {
    width: calc(100% - 30px);
  }

  ${Input}:checked + & span {
    border: none;
    background-color: orangered;
    &::after {
      content: "✓";
      color: whitesmoke;
    }
  }

  ${Input}:checked + & p {
   color:  blueviolet;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 5px;
`;

export const BtnItem = styled(Btn)`
  padding: 5px;
`;
