import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;

  border: 1px solid ${(props) => props.theme.border}70;
  border-radius: 0.375rem;

  width: 100%;
  padding: 0.75rem 0.375rem;
  gap: 1rem;

  .iconForm {
    color: ${(props) => props.theme.iconTertiary};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.border};
  }

  input {
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;

    color: ${(props) => props.theme.title};
    background-color: transparent;
    border: none;
    overflow: hidden;

    &:focus {
      outline: none;
    }
  }

  .input-icon {
    color: ${(props) => props.theme.iconTertiary};
  }
`
