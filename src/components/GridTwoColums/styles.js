import styled, { css } from 'styled-components';
import { Title } from '../Headings/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
  width: 100%;
    max-width: 300px;
    margin: auto;
    display: block;
     `}
`;