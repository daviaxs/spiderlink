'use client'

import styled from 'styled-components'

export const AdminRoot = styled.main`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  padding: 2rem 0;
  gap: 2rem;

  .backLink {
    position: absolute;
    top: 2rem;
    left: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .icon {
        color: ${({ theme }) => theme.description};
      }

      .text {
        color: ${({ theme }) => theme.description};
      }
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${({ theme }) => theme.description};
    }
  }
`

export const AdminContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  gap: 2rem;
`
