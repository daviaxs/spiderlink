'use client'

import styled from 'styled-components'

export const ProfileRoot = styled.main`
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
    top: 2.2rem;
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

    @media (max-width: 400px) {
      left: 1rem;

      .text {
        display: none;
      }
    }
  }
`

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

  @media (max-width: 350px) {
    width: 100%;
  }
`

export const ProfileInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 350px) {
    width: 100%;
  }
`
