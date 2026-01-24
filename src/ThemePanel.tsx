import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'

const THEMES = [
  'indigo',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
]

export default function ThemePanel() {
  const [currentTheme, setCurrentTheme] = useState('indigo')
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'indigo'
    setCurrentTheme(saved)
    document.documentElement.dataset.theme = saved
  }, [])

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }

  const handleDarkToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors z-40"
        aria-label="Toggle theme panel"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`fixed bottom-20 right-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-xs z-40 transform transition-all duration-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Choose Theme
        </h2>

        {/* Dark / Light Toggle */}
        <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{theme === 'dark' ? 'Dark mode' : 'Light mode'}</span>
          <button
            onClick={handleDarkToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              theme === 'dark' ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-4 gap-3">
          {THEMES.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeChange(theme)}
              className={`flex items-center justify-center h-12 rounded-lg font-medium text-sm transition-all ${
                currentTheme === theme
                  ? 'ring-2 ring-primary-500 ring-offset-2'
                  : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor: `var(--color-${theme}-500)`,
                color: 'white',
              }}
              title={theme}
            >
              {theme.charAt(0).toUpperCase()}
            </button>
          ))}
        </div>

        {/* Current Theme Display */}
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Current Theme: <span className="font-semibold text-gray-900 dark:text-white capitalize">{currentTheme}</span>
          </p>
        </div>
      </div>
    </>
  )
}
