# Tailwind Theme System & Component Library

A modern React application built with Tailwind CSS v4, featuring a dynamic theme system with 22 color options and dark/light mode support, plus a complete UI component library.

## Features

✨ **Theme System**
- 22 color themes (red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone)
- Dark/Light/System mode toggle with localStorage persistence
- CSS variable-based theming for runtime color switching
- Floating theme panel for easy customization

📦 **Component Library**
- **Button** - Multiple variants (primary, secondary, outline, danger) and sizes
- **Input** - Text input with labels, error states, and help text
- **Card** - Container component with header, title, content, and footer
- **Badge** - 5 color variants for status indicators
- **Select** - Dropdown menu with label support
- **Textarea** - Multi-line text input with validation
- **Alert** - 4 variants (info, success, warning, error) with close handling

🎨 **UI Components Demo**
- Interactive showcase of all components
- Form example with full validation states
- Dark mode support across all components

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── App.tsx                    # Main app component with demo
├── index.css                  # Global styles & theme CSS variables
├── main.tsx                   # React entry point
├── components/
│   ├── ThemePanel.tsx         # Floating theme switcher panel
│   ├── Alert.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   └── index.ts               # Component exports
└── hooks/                     
    └── useTheme.ts            # Dark/light/system mode management
```

## Usage

### Theme System

#### Using the Theme Panel
Click the floating button in the bottom-right corner to open the theme panel:
- Select a color from the 22-color grid to change the primary color
- Toggle the switch to switch between light and dark modes
- Choose from Light, Dark, or System (syncs with OS preference)

#### Programmatically

```typescript
import { useTheme } from './hooks/useTheme'

function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  )
}
```

### Using Components

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent, Badge, Alert } from './components'

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="Your name" placeholder="John" />
        <Button>Submit</Button>
        <Badge>New</Badge>
      </CardContent>
    </Card>
  )
}
```

### Primary Color in Styles

The primary color is available via CSS variables:

```tsx
<div className="bg-primary-500 text-white">
  Uses the selected primary color
</div>
```

Or directly in CSS/Tailwind:
```css
.custom-element {
  background-color: var(--color-primary-500);
}
```

## Theme System Architecture

### How It Works
The theme system operates on two independent tracks:

**1. Dark/Light Mode (`themeMode` in localStorage)**
- Managed by `useTheme()` hook
- Applies `dark` class to root HTML element
- Supports three modes: `light`, `dark`, `system`
- System mode syncs with OS preference via `prefers-color-scheme` media query
- Persisted in localStorage with key: `themeMode`

**2. Color Theme (`themeColor` in localStorage)**
- Managed by ThemePanel component
- Applies `data-theme="colorname"` attribute to root HTML element
- 22 color presets available
- Uses CSS variables for dynamic color switching
- Persisted in localStorage with key: `themeColor`

### Preventing Flash on Reload
An inline script in `index.html` runs **before React renders**, applying saved theme settings synchronously:
```html
<script>
  const themeMode = localStorage.getItem('themeMode');
  const themeColor = localStorage.getItem('themeColor') || 'indigo';
  
  if (themeMode === 'dark') {
    document.documentElement.classList.add('dark');
  }
  document.documentElement.dataset.theme = themeColor;
</script>
```
This ensures the correct theme is visible immediately, with no light→dark flash.

### CSS Implementation
The `index.css` file defines:
- `@theme` block with 22 color palettes mapping to CSS variables
- Custom dark variant: `@custom-variant dark (&:where(.dark, .dark *))`
- Each color theme mapped via `[data-theme="colorname"]` selectors
- All components use `dark:` variants which activate when `.dark` class is present

### Storage Keys
- `themeMode` - Stores: `"light"`, `"dark"`, or `"system"`
- `themeColor` - Stores: Color name like `"indigo"`, `"red"`, `"cyan"`, etc.

## Technologies Used

- **React** 19.2.0 - UI framework
- **Tailwind CSS** 4.1.18 - Utility-first CSS with variable theming
- **TypeScript** 5.9.3 - Type-safe JavaScript
- **Vite** 7.3.1 - Fast build tool and dev server

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any modern browser supporting CSS variables and ES2020

## Development

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### How to Use the Theme Hook

```typescript
import { useTheme } from './hooks/useTheme'
import type { Theme } from './hooks/useTheme'

export function MyComponent() {
  const { theme, setTheme } = useTheme()
  // theme is "light" | "dark" | "system"
  
  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    // Automatically saves to localStorage and applies dark class
  }
  
  return (
    <div>
      <p>Current mode: {theme}</p>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
    </div>
  )
}
```

### Customizing Colors

To add or modify color themes, edit `src/index.css`:

1. Add color variables in the `@theme` block (if adding new colors):
```css
@theme {
  --color-mycustom-50: #f0f0f0;
  --color-mycustom-500: #5555ff;
  --color-mycustom-900: #001a4d;
  /* ... other shades ... */
}
```

2. Add a color preset selector:
```css
[data-theme="mycustom"] {
  --color-primary-50: var(--color-mycustom-50);
  --color-primary-100: var(--color-mycustom-100);
  /* ... map all shades ... */
  --color-primary-900: var(--color-mycustom-900);
}
```

3. Add to THEMES array in `ThemePanel.tsx`:
```typescript
const THEMES = [
  // ... existing colors ...
  'mycustom',
]
```

## License

MIT - Feel free to use this project for personal or commercial use.

## Debugging

The theme system includes detailed console logging to help track state changes. Open your browser's developer console (F12) to see:

**When initializing:**
```
🌙 useTheme initialized:
  - Saved in localStorage (themeMode): dark
  - Using mode: dark
🌙 applyTheme: Applying dark mode
```

**When toggling dark mode:**
```
🌙 Dark mode toggle clicked:
  - Current theme mode: dark
  - New theme mode: light
🌙 changeTheme called:
  - New mode: light
  - Saved to localStorage: themeMode = light
🌙 applyTheme: Applying light mode
```

**When changing color:**
```
🎨 Color theme changed:
  - New color: red
  - Dark mode state: dark
```

Remove these console.log calls if they're not needed in production.

## Contributing

Pull requests welcome! For major changes, please open an issue first to discuss what you'd like to change.
```
