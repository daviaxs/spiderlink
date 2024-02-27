'use client'

import styled from 'styled-components'

export const ProductsRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  height: fit-content;

  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`
