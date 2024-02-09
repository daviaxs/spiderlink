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
  border-radius: 50%;
  padding: 0.2rem;

  width: 2.5rem;
  height: 2.5rem;

  .menu-icon {
    margin-top: 0.1rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${themeColors['dark-blue-100']}50;
  }
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;

  width: 80%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;

  @media (max-width: 450px) {
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
  border-radius: 50%;
  padding: 0.2rem;

  position: absolute;
  left: 0.5rem;
  top: 1rem;
`

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1.25rem 0.625rem;

  background-color: ${(props) => props.theme.bodySecondary};
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem 0.5rem 0 0;

  h2 {
    color: ${(props) => props.theme.title};
  }

  @media (max-width: 450px) {
    border-radius: 0;
  }
`

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  padding: 1.875rem 1.25rem;
  gap: 0.625rem;
`
