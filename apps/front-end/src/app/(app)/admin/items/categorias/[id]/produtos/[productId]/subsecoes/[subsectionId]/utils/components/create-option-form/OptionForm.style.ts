'use client'

import styled from 'styled-components'

export const FormRoot = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
`

export const FormContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  gap: 1rem;

  @media (max-width: 600px) {
    align-items: center;
    justify-content: start;
    flex-direction: column;
  }
`
