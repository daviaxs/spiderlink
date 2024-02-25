import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const InputRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: transparent;
  border-radius: 0.375rem;

  width: 100%;
  gap: 0.35rem;

  h3 {
    margin-left: 0.5rem;
  }

  input {
    font-size: 1rem;
    font-weight: 500;

    padding: 0 0.5rem;

    color: ${({ theme }) => theme.title};
    background-color: ${({ theme }) => theme.bodySecondary};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0.375rem;

    height: 3rem;

    &:focus {
      outline: none;
    }
  }
`

export const CheckboxRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  margin-top: 0.5rem;
  gap: 1rem;

  font-weight: 600;
  color: ${({ theme }) => theme.description}70;
  white-space: nowrap;

  input[type='checkbox'] {
    display: none;
  }

  input + label:before {
    content: '';
    width: 24px;
    height: 24px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.bodyQuaternary};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 6px;

    display: inline-block;
    vertical-align: middle;

    margin-right: 8px;
    margin-bottom: 5px;
  }

  input:checked + label:before {
    background: linear-gradient(
      120deg,
      ${themeColors['primary-300']} 10%,
      ${themeColors['primary-700']} 100%
    );
  }

  @media (max-width: 360px) {
    margin-top: 2rem;
    input + label:before {
      position: absolute;
      top: -2rem;
    }
  }
`
