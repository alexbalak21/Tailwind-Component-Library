# Tailwind Theme System & Component Library

A modern React application built with Tailwind CSS v4, featuring a dynamic theme system with 22 color options and dark/light mode support, plus a complete UI component library.

## Features

✨ **Theme System**
- 22 color themes (red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone)
- Dark/Light/System mode toggle with localStorage persistence
- CSS variable-based theming for runtime color switching
- Floating theme panel for easy customization

📦 **Component Library (32 Total)**

**Base Components (8)**
- Button, Input, Card, Badge, Select, Textarea, Alert, ThemePanel

**Form Components (5)**
- Checkbox, Radio, Toggle, Slider, FormGroup

**Feedback Components (5)**
- Toast, Tooltip, ProgressBar, Spinner, Skeleton

**Navigation Components (5)**
- Tabs, Breadcrumb, Pagination, Navbar, Sidebar

**Layout Components (5)**
- Modal, Drawer, Divider, Avatar, Stack (HStack/VStack)

**Data Components (3)**
- Table, List, Dropdown

🎨 **Interactive Demo**
- Full-page showcase of all components with live examples
- Responsive design with working state management
- Complete dark mode support

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
├── App.tsx                      # Main app with comprehensive demo
├── index.css                    # Global styles & theme CSS variables
├── main.tsx                     # React entry point
├── components/
│   ├── ThemePanel.tsx           # Floating theme switcher
│   ├── Alert.tsx, Badge.tsx, Button.tsx, Card.tsx
│   ├── Input.tsx, Select.tsx, Textarea.tsx
│   ├── form/                    # Form components (5)
│   │   ├── Checkbox.tsx, Radio.tsx, Toggle.tsx
│   │   ├── Slider.tsx, FormGroup.tsx
│   │   └── index.ts
│   ├── feedback/                # Feedback components (5)
│   │   ├── Toast.tsx, Tooltip.tsx, ProgressBar.tsx
│   │   ├── Spinner.tsx, Skeleton.tsx
│   │   └── index.ts
│   ├── navigation/              # Navigation components (5)
│   │   ├── Tabs.tsx, Breadcrumb.tsx, Pagination.tsx
│   │   ├── Navbar.tsx, Sidebar.tsx
│   │   └── index.ts
│   ├── layout/                  # Layout components (5)
│   │   ├── Modal.tsx, Drawer.tsx, Divider.tsx
│   │   ├── Avatar.tsx, Stack.tsx
│   │   └── index.ts
│   ├── data/                    # Data components (3)
│   │   ├── Table.tsx, List.tsx, Dropdown.tsx
│   │   └── index.ts
│   └── index.ts                 # Central exports for all components
└── hooks/
    └── useTheme.ts              # Dark/light/system mode management
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

**Base Components:**
```tsx
import { Button, Input, Card, Badge, Alert } from './components'

export function Example() {
  return (
    <Card>
      <Input label="Name" />
      <Button>Submit</Button>
      <Badge>New</Badge>
    </Card>
  )
}
```

**Form Components:**
```tsx
import { Checkbox, Radio, Toggle, Slider, FormGroup } from './components/form'

export function FormExample() {
  const [value, setValue] = useState(50)
  
  return (
    <FormGroup label="Settings" required>
      <Checkbox label="Accept terms" />
      <Toggle label="Enable notifications" />
      <Slider min={0} max={100} value={value} onChange={setValue} />
    </FormGroup>
  )
}
```

**Feedback Components:**
```tsx
import { Toast, Tooltip, ProgressBar, Spinner } from './components/feedback'

export function FeedbackExample() {
  return (
    <>
      <Tooltip content="Helpful text"><Button>Hover</Button></Tooltip>
      <ProgressBar value={75} max={100} />
      <Spinner size="md" />
    </>
  )
}
```

**Navigation Components:**
```tsx
import { Tabs, Navbar, Pagination } from './components/navigation'

export function NavExample() {
  const [page, setPage] = useState(1)
  
  return (
    <>
      <Navbar title="App" logo="🎨" />
      <Tabs tabs={[
        { id: '1', label: 'Tab 1', content: 'Content 1' },
        { id: '2', label: 'Tab 2', content: 'Content 2' },
      ]} />
      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
    </>
  )
}
```

**Layout Components:**
```tsx
import { Modal, Avatar, HStack, Divider } from './components/layout'

export function LayoutExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <HStack gap="md">
        <Avatar initials="JD" />
        <p>User Profile</p>
      </HStack>
      <Divider />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Modal content here...
      </Modal>
    </>
  )
}
```

**Data Components:**
```tsx
import { Table, List, Dropdown } from './components/data'

export function DataExample() {
  return (
    <>
      <Table
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
        ]}
        data={data}
      />
      <List items={[
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
      ]} />
    </>
  )
}
```

### Importing Components

**From main index (recommended):**
```typescript
import { Button, Checkbox, Modal, Table } from './components'
```

**From category folders:**
```typescript
import { Checkbox, Toggle, Slider } from './components/form'
import { Toast, Tooltip, Spinner } from './components/feedback'
import { Tabs, Navbar, Sidebar } from './components/navigation'
import { Modal, Avatar, HStack } from './components/layout'
import { Table, List, Dropdown } from './components/data'
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

## Component Library Overview

### Organization & Features

**32 Components across 6 categories:**

| Category | Count | Description |
|----------|-------|-------------|
| **Base** | 8 | Foundation UI elements (Button, Input, Card, Badge, Select, Textarea, Alert, ThemePanel) |
| **Form** | 5 | Form controls with validation support (Checkbox, Radio, Toggle, Slider, FormGroup) |
| **Feedback** | 5 | User feedback mechanisms (Toast, Tooltip, ProgressBar, Spinner, Skeleton) |
| **Navigation** | 5 | Navigation patterns (Tabs, Breadcrumb, Pagination, Navbar, Sidebar) |
| **Layout** | 5 | Structural components (Modal, Drawer, Divider, Avatar, Stack) |
| **Data** | 3 | Data display (Table, List, Dropdown) |

✅ **All components feature:**
- Full TypeScript support with precise prop interfaces
- Complete dark mode support out of the box
- Responsive design ready for mobile/tablet/desktop
- Accessible HTML with ARIA labels and semantic structure
- Customizable props for flexibility
- Tailwind CSS classes with primary color variants
- Consistent styling and animations

### Component Details

**Form Components:**
- **Checkbox** - Customizable checkbox with labels and error states
- **Radio** - Single radio button with RadioGroup wrapper for managing multiple options
- **Toggle** - Switch component with 3 sizes (sm/md/lg) and smooth animations
- **Slider** - Range input with visual progress bar and gradient fill
- **FormGroup** - Wrapper component for consistent form layouts with labels, hints, errors

**Feedback Components:**
- **Toast** - Dismissible notifications with 4 variants (success/error/info/warning) and auto-dismiss
- **Tooltip** - Hover tooltips with 4 directional positions (top/bottom/left/right)
- **ProgressBar** - Visual progress indicator with 4 variants, labels, and animations
- **Spinner** - Loading indicator with 3 sizes and customizable colors
- **Skeleton** - Animated placeholder for loading states with circular option

**Navigation Components:**
- **Tabs** - Tabbed interface with pills and underline variants
- **Breadcrumb** - Navigation path display with icon support
- **Pagination** - Smart page navigation with ellipsis and arrow controls
- **Navbar** - Sticky header with logo, title, and responsive mobile menu
- **Sidebar** - Full-height collapsible navigation with drawer overlay for mobile

**Layout Components:**
- **Modal** - Centered dialog with 3 sizes (sm/md/lg), header, body, footer, and close button
- **Drawer** - Slide-out panel from left or right with overlay backdrop
- **Divider** - Horizontal or vertical divider with optional text label
- **Avatar** - User avatar displaying image or initials with online status indicator
- **Stack** - Layout utilities (HStack, VStack) with gap, alignment, and justify options

**Data Components:**
- **Table** - Data table with striped/hover/bordered variants, custom cell rendering
- **List** - Ordered/unordered lists with compact variant and active state
- **Dropdown** - Positioned dropdown menu with divider support and disabled items

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
