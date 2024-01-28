'use client'

import styled from 'styled-components'

interface TextProps {
  as: keyof JSX.IntrinsicElements
  size: number
  $weight?: '200' | '300' | '400' | '500' | '700' | '800' | '900'
  $textalign?: 'center' | 'left' | 'right'
  $lineheight?: string
  $whiteSpace?: 'normal' | 'nowrap'
  fontVariant?:
    | 'small-caps'
    | 'all-small-caps'
    | 'petite-caps'
    | 'all-petite-caps'
    | 'unicase'
    | 'titling-caps'
}

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineheight }) => $lineheight || '100%'};
  text-align: ${({ $textalign }) => $textalign};
  white-space: ${({ $whiteSpace }) => $whiteSpace || 'normal'};
  font-variant: ${({ fontVariant }) => fontVariant};
`
