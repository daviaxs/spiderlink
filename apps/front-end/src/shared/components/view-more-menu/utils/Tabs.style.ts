'use client'

import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components'

export const Root = styled(Tabs.Root)`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;
`

export const List = styled(Tabs.List)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;

  width: 100%;
  margin-bottom: 3rem;
`

export const Trigger = styled(Tabs.Trigger)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  width: 100%;

  color: white;

  &[data-state='active'] {
    border-bottom: solid 2px ${(props) => props.theme.statusOpen};

    h2 {
      color: ${(props) => props.theme.statusOpen};
    }
  }
`

export const Content = styled(Tabs.Content)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 1.25rem;

  div {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }
`
