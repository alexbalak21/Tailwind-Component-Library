import React from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  closeButton?: boolean
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeButton = true,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg ${sizeClasses[size]} max-h-[90vh] overflow-auto`}>
          {(title || closeButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              {title && <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>}
              {closeButton && (
                <button
                  onClick={onClose}
                  className="ml-auto text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              )}
            </div>
          )}
          <div className="p-6 text-gray-700 dark:text-gray-300">{children}</div>
          {footer && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
