'use client'

import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  padding: 0.75rem 0.625rem;
  gap: 0.938rem;

  min-width: fit-content;
  max-width: fit-content;
  min-height: 4.688rem;
  max-height: 4.688rem;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.bodySecondary};
  border: 1px solid ${(props) => props.theme.border};

  user-select: none;

  button {
    cursor: pointer;
  }

  @media (max-width: 680px) {
    min-height: fit-content;
    max-height: fit-content;
    padding: 0.25rem 0.625rem;
  }
`

export const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 680px) {
    .status-mobile {
      display: flex;
      content: '';

      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.statusOpen};
    }

    .closed {
      background-color: ${({ theme }) => theme.statusClosed};
    }
  }
`

export const ButtonBadgeStyle = styled.div`
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;

  background-color: ${(props) => props.theme.bodySecondary};
  color: ${(props) => props.theme.button};

  height: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.375rem;
    border-radius: 0.375rem;
  }

  &:hover span {
    background-color: ${(props) => props.theme.hoverButton};
  }
`

export const TextsBadgeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  height: 100%;

  span {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &.padding-right {
    padding: 0 0rem 0 0;
  }
`
