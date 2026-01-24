import React from 'react'

export interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg'
  online?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-16 h-16 text-lg',
}

export function Avatar({ src, alt, initials, size = 'md', online, className = '' }: AvatarProps) {
  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} rounded-full bg-primary-500 text-white flex items-center justify-center font-bold ${className}`}
        >
          {initials}
        </div>
      )}
      {online !== undefined && (
        <div
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-900 ${
            online ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
      )}
    </div>
  )
}
