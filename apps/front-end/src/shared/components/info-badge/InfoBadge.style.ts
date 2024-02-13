'use client'

import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 0.625rem;
  gap: 0.938rem;

  width: fit-content;
  height: 4.688rem;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.bodySecondary};
  border: 1px solid ${(props) => props.theme.border};
`

export const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonBadgeStyle = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.button};
  padding: 0.375rem;

  &:hover {
    background-color: ${(props) => props.theme.hoverButton};
    border-radius: 0.3rem;
  }
`

export const TextsBadgeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  height: 100%;
`
