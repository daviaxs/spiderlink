'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { themeColors } from '@/shared/style/theme/pallete'
import {
  AnimationFadeInOpacity,
  AnimationFadeInOpacityWithTop,
  AnimationFadeOutOpacity,
} from '@/shared/style/animations'

export const Overlay = styled(Dialog.Overlay)`
  background: ${themeColors['dark-blue-900']}70;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 9999;

  &[data-state='open'] {
    animation: ${AnimationFadeInOpacity} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.2s ease-in-out;
  }
`

export const Trigger = styled(Dialog.Trigger)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.2rem;

  .menu-icon {
    margin-top: 0.1rem;
  }
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  outline: none;

  width: 80%;
  max-height: 80%;

  overflow-y: auto;

  padding: 5rem 2rem;
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
    scrollbar-width: none;
    scrollbar-color: ${({ theme }) => theme.border} transparent;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border};
    border-radius: 10px;
    border: 0px none;
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
`
