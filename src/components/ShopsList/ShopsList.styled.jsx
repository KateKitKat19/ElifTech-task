import styled from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #eee;
  height: 100%;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  width: fit-content;
  padding: 10px;
  background-color: yellow;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
