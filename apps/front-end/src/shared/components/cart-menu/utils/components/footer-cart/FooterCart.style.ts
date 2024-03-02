'use client'

import styled from 'styled-components'

export const FooterCartStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  background-color: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.border};

  padding: 1rem 0.5rem;
  width: 100%;
  height: 5rem;
  bottom: 0;
`

export const FooterCartInfos = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  flex: 1;
  gap: 0.5rem;
`
