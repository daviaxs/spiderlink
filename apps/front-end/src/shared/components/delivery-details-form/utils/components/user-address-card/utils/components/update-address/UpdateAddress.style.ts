'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import {
  AnimationFadeInOpacityWithTop,
  AnimationFadeOutOpacity,
} from '@/shared/style/animations'

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  outline: none;

  width: 100%;
  height: 100%;

  overflow-y: auto;

  padding: 5rem 2rem;
  gap: 2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  background-color: ${(props) => props.theme.body};
  border: none;

  & {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.border} transparent;
  }

  &[data-state='open'] {
    animation: ${AnimationFadeInOpacityWithTop} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.2s ease-in-out;
  }
`

export const Close = styled(Dialog.Close)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.2rem;

  position: absolute;
  left: 0.5rem;
  top: 1rem;

  color: ${({ theme }) => theme.icon};
`
