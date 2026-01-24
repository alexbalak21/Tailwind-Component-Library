
export interface SkeletonProps {
  width?: string | number
  height?: string | number
  circle?: boolean
  className?: string
}

export function Skeleton({ width = '100%', height = '1rem', circle = false, className = '' }: SkeletonProps) {
  const widthClass = typeof width === 'number' ? `w-${width}` : 'w-full'
  const heightClass = typeof height === 'number' ? `h-${height}` : 'h-4'

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${circle ? 'rounded-full' : 'rounded'} ${className}`}
      style={{
        width: typeof width === 'string' ? width : `${width}px`,
        height: typeof height === 'string' ? height : `${height}px`,
      }}
    />
  )
}
