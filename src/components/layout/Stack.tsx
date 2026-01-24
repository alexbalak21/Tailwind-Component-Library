import React from 'react'

export interface StackProps {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'between' | 'end'
  className?: string
}

const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
  end: 'justify-end',
}

export function HStack({
  children,
  gap = 'md',
  align = 'center',
  justify = 'start',
  className = '',
}: Omit<StackProps, 'direction'>) {
  return (
    <div
      className={`flex flex-row ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
    >
      {children}
    </div>
  )
}

export function VStack({
  children,
  gap = 'md',
  align = 'start',
  justify = 'start',
  className = '',
}: Omit<StackProps, 'direction'>) {
  return (
    <div
      className={`flex flex-col ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
    >
      {children}
    </div>
  )
}

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  align = 'start',
  justify = 'start',
  className = '',
}: StackProps) {
  return direction === 'horizontal' ? (
    <HStack gap={gap} align={align} justify={justify} className={className}>
      {children}
    </HStack>
  ) : (
    <VStack gap={gap} align={align} justify={justify} className={className}>
      {children}
    </VStack>
  )
}
