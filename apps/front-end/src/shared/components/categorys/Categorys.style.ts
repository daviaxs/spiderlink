'use client'

import styled from 'styled-components'

export const CategorysRoot = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  width: 100%;
  gap: 0.75rem;

  h2 {
    padding: 0 2rem;
  }
`

export const CategoryListRoot = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

export const CategoryScroll = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0 2rem 1rem 2rem;
  overflow-x: auto;

  & {
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
  }

  @media (min-width: 500px) {
    & {
      scrollbar-width: thin;
      scrollbar-color: ${(props) => props.theme.border} transparent;
    }
  }
`

export const CategoryShadow = styled.span`
  position: absolute;
  right: 0;
  height: 5rem;
  width: 6rem;
  box-shadow: -42px 0px 22.7px -26px ${(props) => props.theme.body} inset;
  pointer-events: none;
`

export const CategoryItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  width: 90px;
  height: 85px;

  background-color: ${(props) => props.theme.bodySecondary};
  border-radius: 8px;

  user-select: none;

  &.focus {
    filter: drop-shadow(0px 5px 5px ${({ theme }) => theme.shadow + '40'});
    border: 1px solid ${({ theme }) => theme.border};
  }
`
