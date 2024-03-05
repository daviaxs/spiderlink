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
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  outline: none;

  width: 35rem;
  height: 100%;

  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  z-index: 999;

  background-color: ${(props) => props.theme.body};
  border-left: 1px solid ${(props) => props.theme.border};

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    justify-content: start;
    border-radius: 0;
    border: none;
  }

  .product-image {
    border-radius: 8px;
    object-fit: cover;

    min-width: 150px;
    max-width: 150px;

    @media (max-width: 420px) {
      min-width: 100px;
      max-width: 100px;

      min-height: 90px;
      max-height: 90px;
    }
  }

  &[data-state='open'] {
    animation: ${AnimationFadeInOpacityWithTop} 0.2s ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${AnimationFadeOutOpacity} 0.2s ease-in-out;
  }
`

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.675rem;

  position: absolute;
  top: -1px;
  z-index: 1;

  background-color: ${({ theme }) => theme.body};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

export const Close = styled(Dialog.Close)`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0.2rem;
`

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  overflow-y: auto;
  flex: 1;

  width: 100%;
  padding: 4rem 0rem 2rem;
  gap: 0.625rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProductInfoRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1rem;
  width: 100%;
  padding: 0 1rem;

  .product-image {
    border-radius: 0.375rem;
  }

  .description {
    color: ${({ theme }) => theme.description};
  }

  .infos {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;

    height: 100%;
    padding: 1rem 0;
  }
`

export const SubsectionsRoot = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
`
