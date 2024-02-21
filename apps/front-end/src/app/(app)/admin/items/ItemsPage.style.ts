'use client'

import styled from 'styled-components'

export const ItemsPageRoot = styled.main`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
  gap: 1.75rem;
`

export const SeparatorCategories = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  height: fit-content;

  .text {
    color: ${({ theme }) => theme.border};
  }

  .line {
    width: 100%;
    height: 5px;
    border-radius: 9px;

    background-color: ${({ theme }) => theme.bodyTertiary};
  }
`

export const CategoriesListRoot = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;
`
