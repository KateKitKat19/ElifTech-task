import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 15px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;

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
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const WrapForContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #210124;
  text-align: center;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
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

export const BtnsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
  &:disabled {
    pointer-events: none;
    cursor: initial;
    opacity: 0.7;
  }
`;

export const WrapForPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
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
