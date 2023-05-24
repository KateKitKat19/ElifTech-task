import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  width: fit-content;
  gap: 15px;
  padding: 10px;
  background-color: green;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
