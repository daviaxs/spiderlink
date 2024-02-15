'use client'

import styled from 'styled-components'

interface ButtonStyleProps {
  as: keyof JSX.IntrinsicElements
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  border: none;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: start;

  background-color: ${(props) => props.theme.bodySecondary};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;

  padding: 0rem 1.25rem;
  gap: 1.25rem;
  height: 5rem;
  width: 100%;

  .texts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .button-title {
    color: ${(props) => props.theme.title};
    letter-spacing: 0.05rem;
  }

  .button-sub-title {
    color: ${(props) => props.theme.subtext};
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.625rem;

  background-color: ${(props) => props.theme.iconContainer};
`
