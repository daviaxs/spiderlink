'use client'

import styled from 'styled-components'

export const SchedulesRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  width: 100%;

  border: 1px solid ${(props) => props.theme.borderSecondary};
  border-radius: 8px;
`

export const SchedulesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.75rem;
  border-bottom: 1px solid ${(props) => props.theme.borderSecondary};

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.icon};
  }
`

export const SchedulesDays = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;

  gap: 0.625rem;
  padding: 1rem 0.75rem;
`

export const SchedulesDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.border};
`
