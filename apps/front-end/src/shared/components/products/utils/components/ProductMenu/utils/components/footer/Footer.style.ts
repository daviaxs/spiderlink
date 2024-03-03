'use client'

import styled from 'styled-components'

export const FooterRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  background-color: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.white};

  width: 100%;
  height: fit-content;
  padding: 1rem;
  gap: 1rem;
  bottom: 0;
`

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.275rem;

  padding: 0.75rem 0.375rem;
  gap: 0.75rem;
`

export const FooterProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  cursor: pointer;

  padding: 0;
  margin: 0;

  height: fit-content;
  width: fit-content;

  background-color: transparent;
  color: ${({ theme }) => theme.button};
`
