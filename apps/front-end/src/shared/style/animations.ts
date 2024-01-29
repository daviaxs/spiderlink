import { keyframes } from 'styled-components'

export const AnimationFadeInOpacityWithTop = keyframes`
  0% {
    opacity: 0;
    margin-top: 1rem;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`

export const AnimationFadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AnimationFadeOutOpacity = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
