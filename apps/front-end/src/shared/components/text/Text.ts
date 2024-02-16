'use client'

import styled from 'styled-components'

interface TextProps {
  as: keyof JSX.IntrinsicElements
  size: number
  color?: string
  $weight?: '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  $textalign?: 'center' | 'left' | 'right'
  $lineheight?: string
  $whiteSpace?: 'normal' | 'nowrap'
  $letterSpacing?: string
  fontVariant?:
    | 'small-caps'
    | 'all-small-caps'
    | 'petite-caps'
    | 'all-petite-caps'
    | 'unicase'
    | 'titling-caps'
}

export const Text = styled.p<TextProps>`
  color: ${({ color, theme }) => color || theme.text};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineheight }) => $lineheight || '100%'};
  text-align: ${({ $textalign }) => $textalign};
  white-space: ${({ $whiteSpace }) => $whiteSpace || 'normal'};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || 'normal'};
  font-variant: ${({ fontVariant }) => fontVariant};
`
