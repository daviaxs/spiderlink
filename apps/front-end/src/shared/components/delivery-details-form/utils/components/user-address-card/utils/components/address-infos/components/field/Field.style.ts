'use client'

import styled from 'styled-components'

export const FieldRootStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme.description};
  }
`
