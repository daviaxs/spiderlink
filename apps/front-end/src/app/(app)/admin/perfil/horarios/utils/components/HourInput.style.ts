'use client'

import styled from 'styled-components'

export const HourInputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 3.75rem;
    height: 2.188rem;

    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;

    color: ${(props) => props.theme.text};
  }
`
