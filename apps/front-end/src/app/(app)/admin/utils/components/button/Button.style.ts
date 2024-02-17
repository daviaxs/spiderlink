'use client'

import styled from 'styled-components'

export const ButtonRoot = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 2px dashed ${({ theme }) => theme.border};
  border-radius: 0.75rem;

  transition: all 150ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
  padding: 0.75rem;

  width: 200px;
  height: 200px;

  .icon {
    color: ${({ theme }) => theme.icon};
  }
`
