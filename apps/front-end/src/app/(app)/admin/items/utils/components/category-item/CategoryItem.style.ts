'use client'

import styled from 'styled-components'

export const CategoryItemRoot = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  width: 100%;
  height: 3rem;
  padding: 0 1rem;
`

export const CategoryItemNameStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 5rem;
`

export const CategoryItemActionsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

interface CategoryItemButtonProps {
  as: keyof JSX.IntrinsicElements
}

export const CategoryItemButtonStyle = styled.button<CategoryItemButtonProps>`
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.iconSecondary};

  padding: 0.375rem;
  height: 100%;
`
