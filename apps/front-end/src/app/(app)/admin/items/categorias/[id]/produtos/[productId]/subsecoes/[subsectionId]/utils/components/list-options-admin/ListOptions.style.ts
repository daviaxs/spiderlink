'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const ListOptionsAdminRoot = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
`

export const OptionItemAdmin = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  width: 100%;
  height: 10rem;
  padding: 1rem;
  overflow: hidden;

  @media (max-width: 560px) {
    align-items: start;
    flex-direction: column;

    padding: 1rem;
    gap: 1rem;
    height: fit-content;
  }
`

export const OptionItemInfos = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  gap: 0.75rem;
  height: 100%;
  width: 20rem;
`

export const ItemInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  gap: 0.5rem;

  .not-description {
    color: ${themeColors['red-400']};
  }

  @media (max-width: 560px) {
    align-items: start;
    flex-direction: column;
  }
`

export const OptionItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  overflow: hidden;

  min-width: 3rem;
  max-width: 3rem;

  .ActionButton {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.75rem;

    color: ${({ theme }) => theme.icon};

    &:hover {
      background-color: ${({ theme }) => theme.bodyQuinary};
    }
  }

  .separator {
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.border};
  }

  @media (max-width: 560px) {
    flex-direction: row;
    height: 3rem;
    min-width: fit-content;
    max-width: fit-content;

    .separator {
      height: 100%;
      width: 1px;
    }
  }
`
