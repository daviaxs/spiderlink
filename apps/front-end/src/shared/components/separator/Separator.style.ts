import styled from 'styled-components'

interface SeparatorStyleProps {
  direction: 'horizontal' | 'vertical'
  height?: string
}

export const Separator = styled.div<SeparatorStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : '2px')};
  height: ${({ height, direction }) =>
    height || (direction === 'horizontal' ? '2px' : '80%')};

  border-radius: 9px;
  color: transparent;
  background-color: ${({ theme }) => theme.border};
`
