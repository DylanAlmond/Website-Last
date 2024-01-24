import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.body};
      font-weight: ${theme.font.fontWeight};
      background-color: ${theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6, p, a {
      color: ${theme.colors.primary}
    }

    h1 {
      font-size: ${theme.fontSize.s1};
    }
    h2 {
      font-size: ${theme.fontSize.s2};
    }
    h3 {
      font-size: ${theme.fontSize.s3};
    }
    h4 {
      font-size: ${theme.fontSize.s4};
    }
    h5 {
      font-size: ${theme.fontSize.s5};
    }
    h6 {
      font-size: ${theme.fontSize.s6};
    }

    a {
      text-decoration: none;
      transition: color 0.1s ease-in-out;

      &:hover {
        color: ${theme.colors.hover}!important;
      }
    }

    #root {
      padding: 16px;
      width: 100%;
      
      @media ${theme.device.mobileS} {
        padding: 16px 0;
      }

      @media ${theme.device.laptop} {
        width: 75dvw;
      }

      @media ${theme.device.desktopXl} {
        width: 50dvw;
      }
    }
  `};
`;

export default GlobalStyle;