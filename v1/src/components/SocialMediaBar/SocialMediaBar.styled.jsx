import { styled, css } from 'styled-components';

export const SocialMediaBarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: ${theme.fontSize.s4};
  `}
`;