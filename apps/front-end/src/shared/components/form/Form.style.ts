'use client'

import styled from 'styled-components'

export const FormContentStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;

  .maxWidth {
    width: 100%;
  }
`
export const InputContainer = styled.div`
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

  .passwordIcon {
    position: absolute;
    right: 0.8rem;
    color: ${(props) => props.theme.border};
  }

  .showPassword {
    cursor: pointer;
  }
`

export const SubmitButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
`
