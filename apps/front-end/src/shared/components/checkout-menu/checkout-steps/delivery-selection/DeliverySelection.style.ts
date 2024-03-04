'use client'

import styled from 'styled-components'

export const DeliverySelectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  padding: 1rem 0.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  cursor: pointer;

  .delivery-alert {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
