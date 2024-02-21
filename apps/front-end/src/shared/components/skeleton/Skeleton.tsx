import { SkeletonProps, SkeletonStyle } from './Skeleton.style'

export function Skeleton({ height, width, borderRadius }: SkeletonProps) {
  return (
    <SkeletonStyle height={height} width={width} borderRadius={borderRadius} />
  )
}
