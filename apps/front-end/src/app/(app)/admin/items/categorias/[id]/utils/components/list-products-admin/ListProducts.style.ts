'use client'

import styled from 'styled-components'

export const ListProductsAdminRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 3rem;
`

export const ProductCardAdmin = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: relative;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  height: 350px;
  min-width: 320px;
  max-width: 320px;
  padding: 1rem;
  gap: 1rem;

  .product-image {
    border-radius: 0.375rem;
  }

  @media (max-width: 400px) {
    min-width: 270px;
    max-width: 320px;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 0.5rem;

  .product-name {
    color: ${({ theme }) => theme.title};
  }

  .product-description {
    color: ${({ theme }) => theme.description};
  }
`

interface ProductFooter {
  $buttonWidth?: string
}

export const ProductFooter = styled.div<ProductFooter>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  width: 100%;
  height: 3.5rem;

  button {
    width: ${({ $buttonWidth }) => $buttonWidth || 'fit-content'};
    height: fit-content;
    padding: 0.75rem 1rem;
  }
`

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
  gap: 0.75rem;
`

export const DeleteProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  right: 0;

  background-color: ${({ theme }) => theme.bodyQuinary};
  border-radius: 9rem 0 0 9rem;
  padding: 1rem;

  cursor: pointer;
  position: absolute;
`
