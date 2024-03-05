'use client'

import styled from 'styled-components'

export const FooterRoot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${({ theme }) => theme.bodySecondary};
  border-top: 1px solid ${({ theme }) => theme.border};

  width: 100%;

  .separator {
    opacity: 50%;
  }
`

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
  gap: 0.5rem;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;

  width: 100%;
  padding: 2rem;
  gap: 2rem;
`

export const FooterContentInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 0.75rem;
`

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  padding: 1rem;
  gap: 1rem;
`
