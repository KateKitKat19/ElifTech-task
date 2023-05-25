import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 15px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 2px solid #b3dec1;
  background-color: white;
  justify-content: center;
  align-items: center;
  transition: box-shadow 250ms ease;

  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

export const WrapForContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #210124;
  text-align: center;
  margin-right: auto;
`;

export const Restaurant = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #210124;
  text-align: center;
`;
export const Thumb = styled.div`
  width: 150px;
  height: 150px;
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

  font-weight: 700;
  letter-spacing: 0.2rem;
  transition: color 250ms ease, background-color 250ms ease;
  &:hover,
  &:focus {
    color: white;
    background-color: #092327;
  }
`;

export const WrapForPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SumTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #210124;
  text-align: center;
  margin-bottom: 5px;
`;

export const TotalForOrder = styled.h3`
  text-align: center;
  font-size: 45px;
  color: #210124;
`;
