import { LoadingStyle } from './Loading.style'

interface LoadingProps {
  color?: 'primary' | 'secondary'
}

export function Loading({ color = 'primary' }: LoadingProps) {
  return (
    <LoadingStyle color={color}>
      <span className="loader"></span>
    </LoadingStyle>
  )
}
