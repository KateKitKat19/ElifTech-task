import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: #210124;
  text-align: center;
`;

export const Button = styled.button`
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
