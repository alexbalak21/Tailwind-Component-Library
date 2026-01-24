import React from 'react'

export interface ListItem {
  id: string | number
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  active?: boolean
}

export interface ListProps {
  items: ListItem[]
  ordered?: boolean
  variant?: 'default' | 'compact'
  onItemClick?: (item: ListItem) => void
}

export function List({ items, ordered = false, variant = 'default', onItemClick }: ListProps) {
  const Component = ordered ? 'ol' : 'ul'

  return (
    <Component className={`space-y-${variant === 'compact' ? '1' : '2'}`}>
      {items.map((item, index) => (
        <li
          key={item.id}
          onClick={() => {
            item.onClick?.()
            onItemClick?.(item)
          }}
          className={`${variant === 'compact' ? 'px-2 py-1' : 'px-4 py-2'} rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
            item.active
              ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {ordered && <span className="font-bold text-gray-400 dark:text-gray-600">{index + 1}.</span>}
          {item.icon && <span>{item.icon}</span>}
          <span>{item.label}</span>
        </li>
      ))}
    </Component>
  )
}
