export interface ProgressBarProps {
  value: number
  max?: number
  variant?: 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  animated?: boolean
}

const variantColors = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

export function ProgressBar({
  value,
  max = 100,
  variant = 'info',
  size = 'md',
  showLabel = false,
  animated = true,
}: ProgressBarProps) {
  const percentage = (value / max) * 100

  return (
    <div className="flex flex-col gap-2">
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${variantColors[variant]} ${sizeClasses[size]} transition-all duration-300 ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {showLabel && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{Math.round(percentage)}%</span>}
    </div>
  )
}
