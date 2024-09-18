import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
    margin: ${theme.spacings.xhuge} 0;

  `}
`;

export const Html = styled.html`
  ${({ theme }) => css`

    iframe {
      width: 100%
    }
  `}
`;
