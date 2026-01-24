import React from 'react'

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  position?: 'left' | 'right'
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  footer,
  position = 'right',
}: DrawerProps) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div
        className={`fixed top-0 ${position}-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col transform transition-transform ${
          isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>
        )}
        <div className="flex-1 overflow-auto p-4 text-gray-700 dark:text-gray-300">
          {children}
        </div>
        {footer && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            {footer}
          </div>
        )}
      </div>
    </>
  )
}
