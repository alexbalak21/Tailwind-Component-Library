import React from 'react'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Radio({ label, error, className = '', ...props }: RadioProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          className={`w-4 h-4 border-2 border-gray-300 dark:border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-2 cursor-pointer ${className}`}
          {...props}
        />
        {label && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>}
      </label>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}

export interface RadioGroupProps {
  options: { label: string; value: string }[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  label?: string
}

export function RadioGroup({ options, value, onChange, error, label }: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      {label && <legend className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</legend>}
      <div className="space-y-2">
        {options.map((option) => (
          <Radio
            key={option.value}
            name={label}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ))}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </fieldset>
  )
}
