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
  overflow-x: hidden;

  padding: 2.5rem;
  gap: 2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

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

  .transition-group {
    position: relative;
    width: 100%;
    gap: 2rem;
  }

  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition:
      transform 500ms ease-in-out,
      opacity 500ms ease-in-out;
  }

  .slide-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .slide-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition:
      transform 500ms ease-in-out,
      opacity 500ms ease-in-out;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  position: absolute;
  bottom: 2rem;

  width: 80%;
  flex: 1;
  gap: 0.75rem;
`
