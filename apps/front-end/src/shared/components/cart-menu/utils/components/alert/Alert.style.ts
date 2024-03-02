'use client'

import styled from 'styled-components'

export const AlertStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  padding: 0.55rem;

  bottom: 0.2rem;
  right: 0.5rem;

  background-color: ${({ theme }) => theme.button};
`
