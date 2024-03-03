'use client'

import styled from 'styled-components'

export const ProductCardRootStyle = styled.li`
  list-style: none;
  position: relative;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  padding: 1rem;
  gap: 0.75rem;

  background-color: ${({ theme }) => theme.bodySecondary};
  border-left: 5px solid ${({ theme }) => theme.button};
  border-radius: 6px;

  h4 {
    color: ${({ theme }) => theme.title};
  }

  .title {
    display: flex;
    align-items: start;
    justify-content: start;
    padding: 0 2.5rem 0 0;
  }

  .total-price {
    color: ${({ theme }) => theme.button};
  }
`

export const ProductSubsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0.5rem;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.body};
  border-radius: 4px;
`

export const ProductOptions = styled.ul`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProductOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.25rem;

  p {
    color: ${({ theme }) => theme.description};
  }
`

export const DeleteProduct = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonTertiary};
  color: ${({ theme }) => theme.icon};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0 0 0 1rem;

  position: absolute;
  right: 0;
  top: 0;
`
