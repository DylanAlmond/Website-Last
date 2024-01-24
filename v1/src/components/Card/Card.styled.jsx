import { styled, css } from 'styled-components';

export const CardWrapper = styled.div`
  background: #ffffff;
  /* border-radius: 0.5rem; */
  /* box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25); */
  overflow: hidden;

  position: relative;

  height: 600px;

  figure {
    height: 100%;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &>article {
    ${({ theme }) => css`
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      height: 100%;
      padding: 2.5rem;
      opacity: 0;

      background-color: rgba(0, 0, 0, 0.7);
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }

      h2, p, a {
        color: ${theme.colors.gray100}
      }

      h2 {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1rem;
      }
    `};
  }
`;