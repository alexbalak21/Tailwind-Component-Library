import { useEffect, useState } from 'react'
import { PRIMARY_COLOR_NAME } from '../theme.config'

const ALLOWED_THEMES = ['red', 'green', 'blue'] as const
type AllowedTheme = (typeof ALLOWED_THEMES)[number]

export function useColorTheme() {
  const [primaryColor, setPrimaryColor] = useState<AllowedTheme>(() => {
    const saved = (localStorage.getItem('theme') as AllowedTheme | null)
    if (saved && ALLOWED_THEMES.includes(saved)) return saved
    return PRIMARY_COLOR_NAME as AllowedTheme
  })

  useEffect(() => {
    document.documentElement.dataset.theme = primaryColor
    localStorage.setItem('theme', primaryColor)
  }, [primaryColor])

  const setTheme = (theme: AllowedTheme) => {
    if (!ALLOWED_THEMES.includes(theme)) return
    setPrimaryColor(theme)
  }

  return {
    primaryColor,
    setTheme,
    allowedThemes: ALLOWED_THEMES,
  }
}
