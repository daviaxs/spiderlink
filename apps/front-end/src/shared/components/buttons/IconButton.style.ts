'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const IconButtonStyle = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${themeColors['dark-blue-100']}50;
  }
`
