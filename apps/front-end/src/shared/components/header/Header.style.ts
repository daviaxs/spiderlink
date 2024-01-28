'use client'

import { themeColors } from '@/shared/style/theme/pallete'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 4.375rem;
  padding: 1.25rem 0.625rem;

  background-color: ${themeColors['dark-blue-50']};
  border-bottom: 1px solid ${themeColors['dark-blue-100']};

  .header-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem;

    h2 {
      margin-bottom: 0.3rem;
    }
  }
`