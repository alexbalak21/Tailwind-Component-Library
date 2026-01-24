import React, { useState } from 'react'

export interface NavbarProps {
  logo?: React.ReactNode
  title?: string
  items?: NavbarItem[]
  rightContent?: React.ReactNode
  onMenuClick?: () => void
}

export interface NavbarItem {
  label: string
  href?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export function Navbar({ logo, title, items = [], rightContent, onMenuClick }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {logo && <div className="text-xl">{logo}</div>}
          {title && <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">{title}</h1>}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2"
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {rightContent && <div className="hidden md:block">{rightContent}</div>}

          <button
            onClick={() => {
              setIsMobileOpen(!isMobileOpen)
              onMenuClick?.()
            }}
            className="md:hidden p-2"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 p-4 space-y-2">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick?.()
                setIsMobileOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
