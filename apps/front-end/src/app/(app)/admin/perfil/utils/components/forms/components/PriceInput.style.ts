'use client'

import styled from 'styled-components'

export const InputRoot = styled.div`
  display: flex;
  position: relative;

  border-bottom: 2px solid ${(props) => props.theme.border};

  width: 100%;
  padding: 0.5rem 0.375rem;
  gap: 1rem;

  .iconForm {
    color: ${(props) => props.theme.iconTertiary};
  }

  &:focus-within {
    border-bottom: 2px solid ${(props) => props.theme.borderSecondary};
  }

  input {
    font-size: 1.5rem;
    font-weight: 500;

    color: ${(props) => props.theme.title};
    background-color: transparent;
    border: none;

    width: 80%;

    &:focus {
      outline: none;
    }
  }
`
