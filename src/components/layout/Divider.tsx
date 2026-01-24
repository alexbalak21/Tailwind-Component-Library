export interface DividerProps {
  direction?: 'horizontal' | 'vertical'
  text?: string
  className?: string
}

export function Divider({ direction = 'horizontal', text, className = '' }: DividerProps) {
  if (direction === 'vertical') {
    return <div className={`w-px h-full bg-gray-200 dark:bg-gray-700 ${className}`} />
  }

  return (
    <div className="flex items-center gap-4">
      <div className={`flex-1 h-px bg-gray-200 dark:bg-gray-700 ${className}`} />
      {text && <span className="text-sm text-gray-500 dark:text-gray-400">{text}</span>}
      {text && <div className={`flex-1 h-px bg-gray-200 dark:bg-gray-700 ${className}`} />}
    </div>
  )
}
