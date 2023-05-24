import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const LinksWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const LogoStyled = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoLink = styled(NavLink)`
  cursor: pointer;
  border-radius: 50%;
  transition: box-shadow 250ms ease;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
`;
