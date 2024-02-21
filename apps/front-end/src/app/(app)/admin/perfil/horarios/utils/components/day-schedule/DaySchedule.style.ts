'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const ScheduleFormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  width: 100%;
  height: 100%;
`

export const ScheduleHoursInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .scheduleInput {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  span {
    margin-top: 0.8rem;
  }
`

export const ClosedIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;
  gap: 1rem;

  font-weight: 600;
  color: ${({ theme }) => theme.description}70;

  input[type='checkbox'] {
    display: none;
  }

  input + label:before {
    content: '';
    width: 24px;
    height: 24px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.bodyQuaternary};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 6px;

    display: inline-block;
    vertical-align: middle;

    margin-right: 8px;
    margin-bottom: 5px;
  }

  input:checked + label:before {
    background: linear-gradient(
      120deg,
      ${themeColors['primary-300']} 10%,
      ${themeColors['primary-700']} 100%
    );
  }

  p {
    color: ${({ theme }) => theme.description}70;
  }
`
