# ✨ Vibe UI Library

Eine lebendige UI-Library basierend auf [Material UI](https://mui.com/) mit einem knalligen **Pink** (`#ff0080`) als Akzentfarbe.

[![npm version](https://img.shields.io/npm/v/vibe-ui-library?style=for-the-badge&color=ff0080)](https://www.npmjs.com/package/vibe-ui-library)
[![npm downloads](https://img.shields.io/npm/dm/vibe-ui-library?style=for-the-badge&color=ff0080)](https://www.npmjs.com/package/vibe-ui-library)
![React](https://img.shields.io/badge/React-18%2B-61dafb?style=for-the-badge)

## 🚀 Live Demo

**[👉 Demo ansehen](https://movefastbreakthings.github.io/vibe-ui-library/)**

## 📦 Installation

```bash
npm install vibe-ui-library @mui/material @mui/icons-material @emotion/react @emotion/styled
```

> ⚠️ **Wichtig:** Die MUI Dependencies (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`) sind **Peer Dependencies** und müssen mit installiert werden!

## 🎨 Features

- 💖 **Knalliges Pink** (`#ff0080`) als Primary Color
- 💜 **Electric Purple** als Secondary Color
- 🌓 **Light & Dark Mode** inklusive
- 📦 **50+ Komponenten** von Material UI
- 🎯 **Alle MUI Icons** enthalten
- ⚡ **TypeScript** Support
- 🎨 **Angepasste Styles** für Buttons, Cards, Chips, etc.

## 🛠️ Verwendung

### Basic Setup

```tsx
import { VibeUIProvider, Button, Typography } from 'vibe-ui-library';

function App() {
  return (
    <VibeUIProvider>
      <Typography variant="h1">Hello Vibe!</Typography>
      <Button variant="contained">Pink Button</Button>
    </VibeUIProvider>
  );
}
```

### Mit Dark Mode Toggle

```tsx
import { VibeUIProvider, useVibeTheme, IconButton, DarkMode, LightMode } from 'vibe-ui-library';

function ThemeToggle() {
  const { mode, toggleMode } = useVibeTheme();
  
  return (
    <IconButton onClick={toggleMode}>
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}

function App() {
  return (
    <VibeUIProvider defaultMode="light">
      <ThemeToggle />
      {/* Dein Content */}
    </VibeUIProvider>
  );
}
```

### Direkter Zugriff auf Farben

```tsx
import { vibePink, vibePurple } from 'vibe-ui-library';

// vibePink[500] = '#ff0080' - Hauptfarbe
// vibePurple[500] = '#9c27b0' - Sekundärfarbe
```

### Theme ohne Provider

```tsx
import { ThemeProvider } from 'vibe-ui-library';
import { vibeTheme, vibeDarkTheme } from 'vibe-ui-library';

function App() {
  return (
    <ThemeProvider theme={vibeTheme}>
      {/* Dein Content */}
    </ThemeProvider>
  );
}
```

## 📚 Verfügbare Exports

### Komponenten
Alle Material UI Komponenten werden re-exportiert:
- Layout: `Box`, `Container`, `Grid`, `Stack`, etc.
- Inputs: `Button`, `TextField`, `Checkbox`, `Switch`, `Slider`, etc.
- Data Display: `Typography`, `Chip`, `Avatar`, `Badge`, `Table`, etc.
- Feedback: `Alert`, `Dialog`, `Snackbar`, `Progress`, etc.
- Surfaces: `Card`, `Paper`, `AppBar`, `Accordion`, etc.
- Navigation: `Tabs`, `Menu`, `Breadcrumbs`, `Pagination`, etc.

### Icons
Alle Material Icons sind verfügbar:
```tsx
import { Favorite, Star, Home, Settings } from 'vibe-ui-library';
```

### Theme
```tsx
import { 
  vibeTheme,        // Light Theme
  vibeDarkTheme,    // Dark Theme
  vibePink,         // Pink Farbpalette
  vibePurple        // Purple Farbpalette
} from 'vibe-ui-library';
```

## 🎨 Farbpalette

### Primary (Pink)
| Shade | Hex |
|-------|-----|
| 300 | `#f06292` |
| 400 | `#ec407a` |
| **500** | **`#ff0080`** |
| 600 | `#e91e63` |
| 700 | `#d81b60` |

### Secondary (Purple)
| Shade | Hex |
|-------|-----|
| 300 | `#ba68c8` |
| 400 | `#ab47bc` |
| **500** | **`#9c27b0`** |
| 600 | `#8e24aa` |
| 700 | `#7b1fa2` |

## 🤖 AI/KI-Tools Integration

Verwende den mitgelieferten Prompt, damit KI-Tools (ChatGPT, Claude, Cursor, etc.) automatisch diese Library nutzen:

**[📋 AI_PROMPT.md](./AI_PROMPT.md)** - Kopiere diesen als System-Prompt oder Kontext

### Kurz-Prompt (zum Kopieren)

```
Verwende die vibe-ui-library (basiert auf Material UI mit Pink-Theme).
Install: npm install vibe-ui-library @mui/material @mui/icons-material @emotion/react @emotion/styled
Import: import { VibeUIProvider, Button, Typography, Box, ... } from 'vibe-ui-library'
Alle Icons: import { Favorite, Star, Home, ... } from 'vibe-ui-library'
Wrapper: <VibeUIProvider>{children}</VibeUIProvider>
Primary Color: Pink (#ff0080)
Kein eigenes CSS - nutze sx prop!
```

## 🏃 Demo lokal starten

```bash
# Repository klonen
git clone https://github.com/movefastbreakthings/vibe-ui-library.git
cd vibe-ui-library

# Dependencies installieren
npm install

# Example starten
cd example
npm install
npm run dev
```

## 📄 Lizenz

MIT

---

Made with 💖 by the Vibe Team

