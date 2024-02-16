'use client'

import styled from 'styled-components'

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  padding: 0.75rem;
  gap: 1rem;

  width: fit-content;
  height: fit-content;

  .avatar {
    border-radius: 25%;
  }
`

export const ProfileInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`
