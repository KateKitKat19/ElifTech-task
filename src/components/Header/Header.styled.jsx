import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 15px;
  padding: 0 46px;
  justify-content: space-between;
  align-items: center;
`;

export const LinksWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const LogoStyled = styled.img`
  width: 42px;
  height: 42px;
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoLink = styled(NavLink)`
  cursor: pointer;
  border-radius: 50%;
  transition: scale 250ms ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  color: #843b62;
  &:visited {
    color: #843b62;
  }
  &:hover,
  &:focus,
  &:active {
    color: #0b032d;
  }
`;
