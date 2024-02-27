'use client'

import styled from 'styled-components'

export const ProductItemRootStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;

  height: 11rem;
  width: 100%;
  gap: 1rem;
  padding: 0 1rem;

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border}50;
  border-radius: 8px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.productBackground}20;
  }

  .product-image {
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    border-radius: 0;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.border}50;
  }
`

export const ProductInfosStyle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
  padding: 1rem 0;

  .product-description {
    color: ${({ theme }) => theme.description};
  }
`
