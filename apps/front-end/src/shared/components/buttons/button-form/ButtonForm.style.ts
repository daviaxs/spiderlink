'use client'

import styled from 'styled-components'

export interface ButtonStyleProps {
  color?: 'primary' | 'secondary'
  size: 'normal' | 'large' | 'full'
}
export const ButtonStyle = styled.button<ButtonStyleProps>`
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-weight: 800;
  font-size: ${({ size }) => (size === 'normal' ? '1rem' : '1.5rem')};
  letter-spacing: 0.7px;

  color: ${(props) =>
    props.color === 'primary' ? props.theme.title : props.theme.white};
  background-color: ${(props) =>
    props.color === 'primary'
      ? props.theme.bodySecondary
      : props.theme.buttonSecondary};

  border: 1px solid ${(props) => props.theme.border};

  width: ${({ size }) => (size === 'full' ? '100%' : 'auto')};
  height: ${({ size }) => (size === 'full' ? '4rem' : 'auto')};
  padding: ${({ size }) =>
    size === 'large' || size === 'full' ? '1rem 3rem' : '0.625rem'};

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.color === 'primary'
        ? props.theme.bodyTertiary
        : props.theme.hoverButtonSecondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
