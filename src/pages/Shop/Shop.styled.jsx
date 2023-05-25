import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 1440px;
  }
`;
