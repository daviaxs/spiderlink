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
  z-index: 999;

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

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  color: ${({ theme }) => theme.icon};
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  outline: none;

  overflow-y: auto;

  width: 35rem;
  height: 100%;

  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  z-index: 999;

  background-color: ${(props) => props.theme.body};
  border-left: 1px solid ${(props) => props.theme.border};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 580px) {
    width: 100%;
    height: 100%;
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
  padding: 0.2rem;

  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.25rem 0.625rem;
`

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex: 1;

  width: 100%;
  padding: 0rem 1.25rem 2rem;
  gap: 1rem;
`
