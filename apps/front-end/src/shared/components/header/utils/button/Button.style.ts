'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: start;

  background-color: ${themeColors['dark-blue-50']};
  border: 1px solid ${themeColors['dark-blue-100']};
  border-radius: 0.5rem;

  padding: 0rem 1.25rem;
  gap: 1.25rem;
  height: 5rem;
  width: 100%;

  .texts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.625rem;

  background-color: ${themeColors['dark-blue-100']};
`
