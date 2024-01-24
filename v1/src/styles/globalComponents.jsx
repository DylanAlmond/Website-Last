import { styled, css } from 'styled-components';

export const FaButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    font-size: ${theme.fontSize.s1};
    cursor: pointer;
    
    &:hover {
      color: ${theme.colors.hover}!important;
    }
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.s7};
    color: ${theme.colors.gray500};
  `};
`;

export const SiteTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.s4};
  `};
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-size: ${theme.fontSize.s6};
  `};
`;

export const WpContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      padding-left: 1rem;
      list-style-position: inside;
    }

    .wp-block-image {
      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const WpPageTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
  `};
`;