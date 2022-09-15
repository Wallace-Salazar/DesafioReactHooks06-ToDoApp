import styled from "styled-components";
import { Btn } from "./GlobalStyles";

export const Container = styled.div`
  width: 85%;
  margin: 15% auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 2rem;
  box-shadow: 6px 6px 5px 3px indigo;
  border: solid indigo;
`;

export const Title = styled.h1`
  width: 100%;
  padding: 1rem;

  text-align: center;
  color: white;
`;

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  height: 2rem;
  width: 90%;
  padding: 0 2%;
  border: 2px;
  background-color: white;
  box-shadow: 2px 2px 5px 1px;
  border-radius: 10px;
  font-size: 10px;
`;

export const Items = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnAdd = styled(Btn)`
  padding: 0 0.8rem;
  font-size: 2.5rem;
  color: white;
`;

export const BtnClear = styled(Btn)`
  display: none;
  padding: 0.2rem;
  font-size: 1.2rem;
  font-weight: normal;
  color: white;
`;
