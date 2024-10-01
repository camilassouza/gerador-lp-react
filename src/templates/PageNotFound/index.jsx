import React from 'react';
import { StyledPageNotFound } from './style'; // Adjust the path as needed

export const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <h1>Página nao encontrada</h1>
      <p>
        A página que você busca não foi encontrada.{" "}
        <a href="/">Clique para voltar</a>
      </p>
    </StyledPageNotFound>
  );
};
