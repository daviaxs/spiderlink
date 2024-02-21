import styled from 'styled-components'

export const SeparatorWithNameStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  height: fit-content;

  .text {
    color: ${({ theme }) => theme.border};
  }

  .line {
    width: 100%;
    height: 5px;
    border-radius: 9px;

    background-color: ${({ theme }) => theme.bodyTertiary};
  }
`
