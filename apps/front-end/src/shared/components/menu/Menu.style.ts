'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { themeColors } from '@/shared/style/theme/pallete'

export const Overlay = styled(Dialog.Overlay)`
  background: ${themeColors['dark-blue-900']}50;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
`

export const Trigger = styled(Dialog.Trigger)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.2rem;

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

  background-color: #fff;
  border: 1px solid ${themeColors['dark-blue-100']};
  border-radius: 0.5rem;
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

  background-color: ${themeColors['dark-blue-50']};
  border-bottom: 1px solid ${themeColors['dark-blue-200']};
  border-radius: 0.5rem 0.5rem 0 0;
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
