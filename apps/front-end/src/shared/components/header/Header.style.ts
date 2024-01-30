'use client'

import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  transition: transform 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 4.375rem;
  padding: 1.25rem 0.625rem;

  background-color: ${(props) => props.theme.bodySecondary};
  border-bottom: 1px solid ${(props) => props.theme.border};

  &.hideHeader {
    transform: translateY(-100%);
  }

  .header-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;

    h2 {
      color: ${(props) => props.theme.title};
      margin-bottom: 0.3rem;
    }
  }
`
