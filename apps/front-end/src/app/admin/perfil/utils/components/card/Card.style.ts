'use client'

import styled from 'styled-components'

export const CardRoot = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.75rem;
  padding: 0.4rem 0.35rem;

  min-width: 300px;
  max-width: 300px;

  background-color: ${({ theme }) => theme.body};
  border-radius: 0.35rem;

  @media (max-width: 350px) {
    min-width: 200px;
    max-width: 200px;
  }
`

export const CardHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .cardButton {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.icon};

    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
