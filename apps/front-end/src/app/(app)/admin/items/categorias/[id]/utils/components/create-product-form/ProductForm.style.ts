'use client'

import styled from 'styled-components'

export const FormRoot = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
`

export const FormContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  gap: 1rem;
`

export const AddProductimageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  padding: 0.75rem;
  border-radius: 0.375rem;

  text-decoration: underline;
  cursor: pointer;

  &:hover {
    transition: background 150ms ease-in-out;
    background-color: ${({ theme }) => theme.bodyTertiary};
  }
`

export const MediaPickerStyle = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  object-fit: cover;

  width: 150px;
  height: 130px;

  border-radius: 0.375rem;
`

export const InputsRoot = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`

export const InputRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: transparent;
  border-radius: 0.375rem;

  width: 100%;
  gap: 0.35rem;

  input {
    font-size: 1rem;
    font-weight: 500;

    padding: 0 0.5rem;

    color: ${({ theme }) => theme.title};
    background-color: ${({ theme }) => theme.bodySecondary};
    border-radius: 0.375rem;
    border: none;

    height: 2rem;

    &:focus {
      outline: none;
    }
  }

  textarea {
    font-size: 1rem;
    font-weight: 500;

    padding: 0 0.5rem;

    color: ${({ theme }) => theme.title};
    background-color: ${({ theme }) => theme.bodySecondary};
    border-radius: 0.375rem;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    resize: none;
    width: 100%;
    height: 5rem;

    &:focus {
      outline: none;
    }
  }
`
