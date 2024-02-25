'use client'

import styled from 'styled-components'

export const ProductPageRoot = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
  gap: 1rem;
`

export const Glossary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  gap: 1rem;
`

export const GlossaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  padding: 0.375rem;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`
