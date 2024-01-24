import { styled, css } from 'styled-components';

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${theme.colors.background};

    width: 100%;
    padding: 1rem 0;
    margin-top: 2rem;
    border-top: 2px solid ${theme.colors.primary};

    @media ${theme.device.mobileS} {
      flex-direction: column;
      gap: 1.5rem;
    }
  `};
`;

export const FooterLogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;

    @media ${theme.device.mobileS} {
      flex-direction: column;
    }
`};
`;