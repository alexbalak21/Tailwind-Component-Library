import React from 'react'

export interface FormGroupProps {
  children: React.ReactNode
  label?: string
  error?: string
  hint?: string
  required?: boolean
}

export function FormGroup({ children, label, error, hint, required }: FormGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
      {hint && !error && <span className="text-xs text-gray-500 dark:text-gray-400">{hint}</span>}
    </div>
  )
}
