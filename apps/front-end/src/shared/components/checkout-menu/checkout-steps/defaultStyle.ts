import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  gap: 1.5rem;
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  gap: 0.75rem;

  .delivery-option {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  padding: 1rem 0.5rem;
  width: 100%;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  cursor: pointer;
`
