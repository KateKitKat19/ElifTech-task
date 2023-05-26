import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 10px;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 25px;
    align-items: flex-start;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  width: fit-content;
  padding: 22px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 19px;
  transition: box-shadow 250ms ease;
  color: #210124;
  font-weight: 700;
  cursor: pointer;
  

  ${({ isCurrent }) =>
    isCurrent &&
    `
    background-color: #7EA2AA;
    color: white;
  `}

  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
`;
