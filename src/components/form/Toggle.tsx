import React from 'react'

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Toggle({ label, size = 'md', className = '', ...props }: ToggleProps) {
  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-11 h-6',
    lg: 'w-14 h-7',
  }

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const translateClasses = {
    sm: 'translate-x-4',
    md: 'translate-x-5',
    lg: 'translate-x-7',
  }

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          disabled={props.disabled}
          {...props}
        />
        <div
          className={`${sizeClasses[size]} ${
            props.checked ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
          } rounded-full transition-colors peer-disabled:opacity-50 ${className}`}
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0.5 ${thumbSizeClasses[size]} bg-white rounded-full transition-transform peer-checked:${translateClasses[size]} peer-disabled:opacity-50`}
        />
      </div>
      {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
    </label>
  )
}
