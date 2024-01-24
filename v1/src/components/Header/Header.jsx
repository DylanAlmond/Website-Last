import { useState } from 'react';
import { HeaderNav, HeaderWrapper, HamburgerButton, HeaderNavWrapper, HeaderLogoWrapper } from './Header.styled';
import { Link, NavLink } from 'react-router-dom';
// import { SiteTitle } from '../../styles/globalComponents';
import logo from '../../assets/logo.svg';
import { gql, useQuery } from "@apollo/client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar.lazy';

const GET_ALL_PAGES = gql`
query getPages {
  pages {
    nodes {
      id
      title
      slug
    }
  }
}
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { data } = useQuery(GET_ALL_PAGES);

  return (
    <HeaderWrapper data-testid="Header">
      <HeaderLogoWrapper>
        <div>
          <HamburgerButton onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
            <FontAwesomeIcon icon={['fas', `${isOpen ? 'xmark' : 'bars'}`]} />
          </HamburgerButton>
        </div>

        <Link to="/">
          <img src={logo} alt="logo" width={'48px'} height={'48px'} />
        </Link>

        <div />
      </HeaderLogoWrapper>

      <HeaderNavWrapper className={isOpen ? 'open' : 'closed'}>
        <div />
        
        <HeaderNav>
          <NavLink to="/">
            Work
          </NavLink>

          {data?.pages.nodes.map((page) => (
            <NavLink key={page.id} to={`/${page.slug}`}>
              {page.title}
            </NavLink>
          ))}
        </HeaderNav>
        
        <div>
          <SocialMediaBar />
        </div>
      </HeaderNavWrapper>
    </HeaderWrapper>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
