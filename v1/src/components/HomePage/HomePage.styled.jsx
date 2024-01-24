import { styled, css } from 'styled-components';

export const HomePageWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 0.5rem;
    /* padding: 16px;
    width: 100%;
    
    @media ${theme.device.laptop} {
      width: 75dvw;
    }

    @media ${theme.device.desktopXl} {
      width: 50dvw;
    } */
  `};
`;
