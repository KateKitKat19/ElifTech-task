import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 29px 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
`;
