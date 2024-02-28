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
  cursor: pointer;

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

  .icon {
    color: ${({ theme }) => theme.icon};
  }

  &[data-state='open'] > .icon {
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

  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.border};

    overflow: hidden;

    .option-infos {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;

      flex: 1;
      padding: 1rem;
      gap: 2rem;

      .option-description {
        color: ${({ theme }) => theme.description}99;
      }

      .option-price {
        color: ${({ theme }) => theme.button};
      }
    }
  }
`

export const OptionActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  gap: 0.75rem;

  .action-button {
    color: ${({ theme }) => theme.button};
  }
`
