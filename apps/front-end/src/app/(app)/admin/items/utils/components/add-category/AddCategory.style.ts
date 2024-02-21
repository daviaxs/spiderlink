'use client'

import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const AddCategoryButtonRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  background-color: ${({ theme }) => theme.bodySecondary};
  border: 1px dashed ${({ theme }) => theme.border};
  border-radius: 0.375rem;

  padding: 1rem;
  gap: 0.5rem;

  cursor: pointer;

  @media (max-width: 350px) {
    span {
      display: none;
    }
  }
`

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  padding: 0.75rem 0.35rem;
  gap: 0.375rem;

  background-color: ${({ theme }) => theme.bodyQuinary};
  border: 1px solid ${({ theme }) => theme.borderTertiary};
  border-radius: 0.375rem;

  width: 15rem;
  max-height: 15rem;

  overflow-y: auto;

  & {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.border} transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: trans;
    border: 10px solid trans;
    margin-inline: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #87879a;
    border: 5px solid trans;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.border};
  }

  @media (max-width: 350px) {
    margin-left: 2rem;
  }
`

export const Item = styled(DropdownMenu.Item)`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  padding: 0.75rem;

  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.body};

  cursor: pointer;
  transition: background 150ms ease-in-out;

  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.bodySecondary};
  }
`

export const SubTrigger = styled(DropdownMenu.SubTrigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.75rem;

  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.bodySecondary};

  font-weight: 600;
  font-size: 18px;

  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bodySecondary};
  }
`

export const SubContent = styled(DropdownMenu.SubContent)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  padding: 0.75rem 0.35rem;
  gap: 0.375rem;

  background-color: ${({ theme }) => theme.bodyQuinary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px -2px ${({ theme }) => theme.body};

  width: 15rem;
  max-height: 15rem;

  overflow-y: auto;

  & {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.border} transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: trans;
    border: 10px solid trans;
    margin-inline: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #87879a;
    border: 5px solid trans;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.border};
  }
`
