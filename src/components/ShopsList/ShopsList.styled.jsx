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
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 25px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: fit-content;
  padding: 22px;
  background-color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  transition: box-shadow 250ms ease;
  color: #210124;
  font-weight: 700;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

