'use client'

import styled from 'styled-components'

export const SchedulesRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 100%;

  padding: 1rem;
  gap: 1rem;
`

export const DayWeekRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.bodySecondary};
  border-radius: 0.375rem;

  padding: 0.75rem;
  width: 100%;
`

export const DayWeekContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 0.75rem;
`

export const DayWeekTimes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  .separator {
    margin-top: 1.45rem;
  }
`

export const DayWeekTime = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  height: 4.5rem;
  gap: 0.5rem;

  .closedText {
    color: ${({ theme }) => theme.description}80;
  }
`

export const DayWeekTimeInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;

  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.375rem;
`

export const DayWeekEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 0.375rem;
  padding: 0.75rem;
  gap: 0.75rem;

  background-color: ${({ theme }) => theme.body};
`
