import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 15px;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #b3dec1;
  background-color: white;
  justify-content: center;
  align-items: center;
  transition: box-shadow 250ms ease;

  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
  @media screen and(min-width: 768px) {
    width: 450px;
  }
  &.disabled {
    pointer-events: none;
    cursor: initial;
    filter: opacity(0.7);
  }
`;

export const WrapForContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #210124;
  text-align: center;
  margin-bottom: 15px;
`;

export const Thumb = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export const Price = styled.p`
  font-size: 18px;
  font-family: 'Libre Baskerville';
  margin-bottom: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #b3dec1;
  padding: 12px 15px;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.2rem;
  transition: color 250ms ease, background-color 250ms ease;
  &:hover,
  &:focus {
    color: white;
    background-color: #092327;
  }
  &:disabled {
    pointer-events: none;
  }
`;
