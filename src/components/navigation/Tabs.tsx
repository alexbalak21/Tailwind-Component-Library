import React, { useState } from 'react'

export interface Tab {
  label: string
  id: string
  content: React.ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  variant?: 'pills' | 'underline'
  onTabChange?: (tabId: string) => void
}

export function Tabs({ tabs, defaultTab, variant = 'underline', onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="w-full">
      <div className={`flex gap-4 border-b border-gray-200 dark:border-gray-700 ${variant === 'pills' ? 'gap-2 border-b-0' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            } ${
              variant === 'pills'
                ? `rounded-lg ${activeTab === tab.id ? 'bg-primary-500 text-white border-b-0' : 'bg-gray-100 dark:bg-gray-800'}`
                : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{activeContent}</div>
    </div>
  )
}
