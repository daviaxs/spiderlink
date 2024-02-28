'use client'

import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const Item = styled(Accordion.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  border: none;
  outline: none;
`

export const Trigger = styled(Accordion.Trigger)`
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.buttonQuaternary};

  width: 100%;
  height: 4rem;
  padding: 0 1rem;

  .description-quantity {
    color: ${({ theme }) => theme.description}90;
    font-family: Roboto, sans-serif;
  }

  .infos {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    gap: 0.35rem;
    height: 100%;
  }

  .infos2 {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    .required {
      background-color: ${({ theme }) => theme.body};
      padding: 0.375rem;
      border-radius: 0.375rem;

      font-family: Roboto;
    }

    .icon {
      color: ${({ theme }) => theme.icon};
    }
  }

  &[data-state='open'] > .infos2 > .icon {
    transition: all 200ms ease-in;
    transform: rotate(180deg);
  }
`

export const Content = styled(Accordion.Content)`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  background-color: transparent;

  &[data-state='open'] {
    padding: 1rem;
  }
`
