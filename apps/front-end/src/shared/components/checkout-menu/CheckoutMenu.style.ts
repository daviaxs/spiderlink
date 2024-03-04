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

  width: 80%;
  max-height: 80%;

  overflow-y: auto;

  padding: 2.5rem;
  gap: 2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;

  & {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.border} transparent;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    justify-content: start;
    border-radius: 0;
    border: none;
  }

  &[data-state='open'] {
    animation: ${AnimationFadeInOpacityWithTop} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.2s ease-in-out;
  }
`
