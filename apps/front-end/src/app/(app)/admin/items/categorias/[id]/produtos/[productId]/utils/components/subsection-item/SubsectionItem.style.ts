'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const SubsectionItemRoot = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  width: 100%;
  height: 3rem;
  padding: 0 1rem;
`

export const SubsectionItemInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`

export const SubsectionItemNameStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 12rem;
`

export const SubsectionItemActionsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

interface SubsectionItemButtonProps {
  as: keyof JSX.IntrinsicElements
}

export const SubsectionItemButtonStyle = styled.button<SubsectionItemButtonProps>`
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.iconSecondary};

  padding: 0.375rem;
  height: 100%;
`

export const SubsectionItemBadgeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  padding: 0.15rem 0.75rem;
  gap: 0.25rem;

  background-color: ${themeColors['primary-500']};
  border: 1px solid ${themeColors['primary-400']};
  border-radius: 0.75rem;

  p {
    color: #fff;
  }
`
