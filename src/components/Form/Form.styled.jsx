import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrap = styled.div`
  width: 100%;
  padding: 15px;
`;

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 200px;
  height: 40px;
  max-height: 40px;
  border: none;
  border: 2px solid #0b5351;
  border-radius: 3px;
  padding: 10px 15px;
  &:focus {
    border: 2px solid #223127;
    outline: transparent;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const SubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  background-color: #0b5351;
  border: transparent;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  border-radius: 3px;
  transition: box-shadow 250ms ease;

  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;
