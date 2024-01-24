import { styled, css } from 'styled-components';

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    position: sticky; top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    z-index: 100;
    background-color: ${theme.colors.background};

    width: 100%;
    padding: 1rem 0;
    margin-bottom: 2rem;
    border-bottom: 2px solid ${theme.colors.primary};

    /* Laptop */
    @media (max-width: 992px) {
      .open {
        max-height: 100px;
      }
        
      .closed {
        max-height: 0;
        margin-top: 0;
      }
    }
  `};
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      padding-bottom: 10px;
    }

    .active {
      text-decoration: underline;
      text-underline-offset: 10px;
    }
`;

export const HamburgerButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    font-size: 40px;
    transition: color 0.1s ease-in-out;

    cursor: pointer;

    &:hover {
      color: ${theme.colors.hover}!important;
    }

    @media ${theme.device.laptop} {
      display: none;
    }
  `}
`;

export const HeaderLogoWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    padding: 0 20px;

    > div:first-child { 
      flex: 1;
    }
    
    > div:last-child { 
      flex: 1;
    }

    @media ${theme.device.laptop} {
      width: auto;
    }
  `}
`;

export const HeaderNavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
    
    > div:first-child { 
      display: none;
    }

    > div:last-child { 
      display: flex;
      flex: 1;
      flex-direction: row-reverse; 
      float: right;
    }

    transition: all 0.5s ease-in-out;

    overflow: hidden;

    @media ${theme.device.laptop} {
      overflow: auto; // Fix!!!
      flex-wrap: wrap;
      flex-direction: row;
      transition: none;

      > div:first-child { 
        display: block;
        flex: 1;
      }
    }
  `}
`;