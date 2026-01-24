import React from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  onNavigate?: (href: string) => void
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.icon && <span className="text-gray-500 dark:text-gray-400">{item.icon}</span>}
          {item.href ? (
            <button
              onClick={() => onNavigate?.(item.href!)}
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-gray-400 dark:text-gray-600">/</span>}
        </div>
      ))}
    </nav>
  )
}
