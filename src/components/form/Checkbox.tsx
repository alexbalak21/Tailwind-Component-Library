import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  checked?: boolean
}

export function Checkbox({ label, error, className = '', ...props }: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className={`w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary-500 focus:ring-primary-500 focus:ring-2 cursor-pointer ${className}`}
          {...props}
        />
        {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
      </label>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
