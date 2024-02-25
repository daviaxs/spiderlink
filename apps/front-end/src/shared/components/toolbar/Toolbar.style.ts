'use client'

import styled from 'styled-components'

export const ToolbarRootStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;
`

export const ToolbarActionsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ToolbarButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  gap: 1rem;

  border-radius: 0.375rem;
  border: 1px dashed ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.bodySecondary};

  cursor: pointer;

  &:hover {
    transition: background 150ms ease-in-out;
    background-color: ${({ theme }) => theme.bodyTertiary};
  }

  @media (max-width: 500px) {
    .textButton {
      display: none;
    }
  }
`
