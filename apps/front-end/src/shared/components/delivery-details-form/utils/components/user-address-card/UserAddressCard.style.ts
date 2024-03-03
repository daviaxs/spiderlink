'use client'

import styled from 'styled-components'

export const UserAddressCardRoot = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  width: 100%;
  padding: 0.75rem 0.375rem;
  gap: 0.75rem;
`

export const UserAddressCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .map-pin-icon {
    color: ${({ theme }) => theme.iconSecondary};
  }
`

export const EditAddressButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.hoverButton};
  border-radius: 0.275rem;

  padding: 0.5rem;

  .icon {
    color: ${({ theme }) => theme.icon};
  }
`
