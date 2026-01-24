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
├── App.tsx              # Main app component with demo
├── ThemePanel.tsx       # Theme switcher with color grid & dark/light toggle
├── index.css            # Global styles & theme CSS variables
├── main.tsx             # React entry point
├── components/          # Reusable UI components
│   ├── Alert.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   └── index.ts        # Component exports
└── hooks/              # Custom React hooks
    └── useTheme.ts     # Dark/light/system mode management
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

### CSS Variables
The theme system uses Tailwind CSS v4's `@theme` block in `index.css`:
- 22 color sets defined via `[data-theme="colorname"]` selectors
- Each color has shades 50-950
- Primary color variants (100-900) for component styling

### Dark Mode
- Toggle via `useTheme()` hook which sets `data-theme` attribute
- Uses Tailwind's `dark:` variants for component styling
- Supports three modes: light, dark, system (matches OS preference)
- Persisted in localStorage

### Color Selection
- Applied via `data-theme` attribute on document root
- Runtime switching with CSS variable updates
- Persisted in localStorage

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

### Customizing Themes

To add new colors or modify existing ones, edit `src/index.css` in the `@theme` block:

```css
@theme {
  --color-mycolor-50: #fff...;
  --color-mycolor-500: #...;
  --color-mycolor-900: #...;
}
```

Then add a selector in the same file:
```css
[data-theme="mycolor"] {
  --color-primary-50: var(--color-mycolor-50);
  /* ... other shades ... */
}
```

## License

MIT - Feel free to use this project for personal or commercial use.

## Contributing

Pull requests welcome! For major changes, please open an issue first to discuss what you'd like to change.
```
