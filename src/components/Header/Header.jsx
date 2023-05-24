import { Wrap, LogoStyled, LogoLink, LinksWrap, LinkStyled } from './Header.styled';
import Logo from '../../assets/Logo.png';

export const Header = () => {
  return (
    <Wrap>
      <LogoLink to="/">
        <LogoStyled src={Logo} alt="logo"></LogoStyled>
      </LogoLink>
      <LinksWrap>
        <LinkStyled to="/"> Shop</LinkStyled>
        <LinkStyled to="/cart"> Shopping Cart</LinkStyled>
      </LinksWrap>
    </Wrap>
  );
};
