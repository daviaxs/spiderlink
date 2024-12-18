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

export const AddProductimageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  padding: 0.75rem;
  border-radius: 0.375rem;

  text-decoration: underline;
  cursor: pointer;

  &:hover {
    transition: background 150ms ease-in-out;
    background-color: ${({ theme }) => theme.bodyTertiary};
  }
`
