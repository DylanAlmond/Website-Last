import { FooterWrapper, FooterLogoWrapper } from './Footer.styled';
import { Link } from 'react-router-dom';
import { Copyright } from '../../styles/globalComponents';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar.lazy';
import logo from '../../assets/logo.svg';

const Footer = () => (
  <FooterWrapper data-testid="Footer">
    <FooterLogoWrapper>
      <Link to="/">
        <img src={logo} alt="logo" width={'48px'} height={'48px'} />
      </Link>

      <Copyright>{'@ '} {new Date().getFullYear()} Dylan Almond</Copyright>
    </FooterLogoWrapper>

    <SocialMediaBar />

  </FooterWrapper>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
