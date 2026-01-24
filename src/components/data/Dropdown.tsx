import React, { useState } from 'react'

export interface DropdownItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  divider?: boolean
  disabled?: boolean
}

export interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  position?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
}

export function Dropdown({
  trigger,
  items,
  position = 'bottom',
  align = 'left',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const alignClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0',
  }

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div
          className={`absolute ${positionClasses[position]} ${alignClasses[align]} min-w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 py-1`}
        >
          {items.map((item, index) => (
            item.divider ? (
              <div key={index} className="my-1 border-t border-gray-200 dark:border-gray-700" />
            ) : (
              <button
                key={index}
                onClick={() => {
                  item.onClick?.()
                  setIsOpen(false)
                }}
                disabled={item.disabled}
                className={`w-full flex items-center gap-2 px-4 py-2 text-left ${
                  item.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span className="text-sm">{item.label}</span>
              </button>
            )
          ))}
        </div>
      )}
    </div>
  )
}
