export const TailwindColors = {
  RED: 'red',
  ORANGE: 'orange',
  AMBER: 'amber',
  YELLOW: 'yellow',
  LIME: 'lime',
  GREEN: 'green',
  EMERALD: 'emerald',
  TEAL: 'teal',
  CYAN: 'cyan',
  SKY: 'sky',
  BLUE: 'blue',
  INDIGO: 'indigo',
  VIOLET: 'violet',
  PURPLE: 'purple',
  FUCHSIA: 'fuchsia',
  PINK: 'pink',
  ROSE: 'rose',
  SLATE: 'slate',
  GRAY: 'gray',
  ZINC: 'zinc',
  NEUTRAL: 'neutral',
  STONE: 'stone',
} as const

export type TailwindColor = typeof TailwindColors[keyof typeof TailwindColors]

export const PRIMARY_COLOR_NAME = TailwindColors.RED
// export let PRIMARY_COLOR = colors[PRIMARY_COLOR_NAME]
