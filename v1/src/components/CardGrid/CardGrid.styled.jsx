import { styled, css } from 'styled-components';

export const CardGridWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 20px;
    align-items: stretch;

    @media ${theme.device.desktopXl} {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  `}
`;
