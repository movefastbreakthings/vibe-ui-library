# Prompt: UI Library Wrapper für Material Tailwind

## Aufgabe

Erstelle eine **React UI Library**, die [Material Tailwind](https://www.material-tailwind.com/) wrapped und mit einem eigenen Theme (knalliges Pink `#ff0080` als Akzentfarbe) vorkonfiguriert.

## Was gebaut werden soll

### 1. Projekt-Struktur

```
vibe-ui-library/
├── src/
│   ├── index.ts              # Haupt-Export (alle Komponenten re-exportieren)
│   ├── theme/
│   │   ├── index.ts
│   │   └── vibeTheme.ts      # Custom Theme mit Pink-Akzent
│   └── components/
│       ├── index.ts
│       └── VibeUIProvider.tsx # Theme Provider Wrapper
├── dist/                      # Build Output (MUSS in Git committed werden!)
├── example/                   # Demo-Projekt mit Vite
├── package.json
├── rollup.config.js
├── tsconfig.json
├── README.md
├── AI_PROMPT.md              # Prompt für KI-Tools zur Nutzung der Library
└── .github/workflows/deploy.yml  # GitHub Pages Deployment
```

### 2. Technische Anforderungen

#### package.json

```json
{
  "name": "vibe-ui-library",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
    "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0",
    "@material-tailwind/react": "^2.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

**WICHTIG:**

- Prüfe die aktuelle Version von `@material-tailwind/react` mit `npm view @material-tailwind/react version`
- Nutze die neueste Version in den peerDependencies
- Alle Dependencies als **peerDependencies** deklarieren (nicht dependencies!)

#### rollup.config.js

```javascript
// NUR ESM exportieren (kein CommonJS!)
// Das vermeidet "createContext is not a function" Fehler in Next.js/Vercel
output: [
  {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: false,
  },
],
external: [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@material-tailwind/react',
  /^react\//,
  /^@material-tailwind\//,
]
```

### 3. Theme Konfiguration

Erstelle ein Custom Theme mit:

- **Primary Color:** `#ff0080` (Knalliges Pink)
- **Secondary Color:** `#9c27b0` (Electric Purple)
- Angepasste Border-Radius, Schatten, Typography

### 4. VibeUIProvider

```tsx
import { ThemeProvider } from "@material-tailwind/react";
import { vibeTheme } from "../theme";

export const VibeUIProvider = ({ children }) => (
  <ThemeProvider value={vibeTheme}>{children}</ThemeProvider>
);
```

### 5. Re-Exports

In `src/index.ts` alle Material Tailwind Komponenten re-exportieren:

```typescript
// Custom Theme & Provider
export { VibeUIProvider } from "./components";
export { vibeTheme } from "./theme";

// Re-export all Material Tailwind Components
export {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Switch,
  // ... alle anderen Komponenten
} from "@material-tailwind/react";
```

### 6. Example Projekt

Erstelle ein Vite + React Projekt in `/example` das:

- Die Library als lokale Dependency nutzt (`"vibe-ui-library": "file:.."`)
- Eine Demo-Seite mit verschiedenen Komponenten zeigt
- Das Pink-Theme demonstriert

### 7. GitHub Pages Deployment

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Demo to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm install
      - run: npm run build
      - run: cd example && npm install && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./example/dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### 8. Dokumentation

#### README.md

- Installation: `npm install vibe-ui-library @material-tailwind/react tailwindcss`
- Peer Dependencies Warnung
- Verwendungsbeispiele
- Link zur Live Demo
- Farbpalette

#### AI_PROMPT.md

Ein Prompt für KI-Tools (ChatGPT, Claude, Cursor, v0.dev), der erklärt:

- Wie die Library zu verwenden ist
- Welche Komponenten verfügbar sind
- Dass KEINE eigenen Styles erstellt werden sollen
- Wie der Provider genutzt wird

## Wichtige Learnings aus dem Original-Projekt

### Probleme die vermieden werden müssen:

1. **Kein CommonJS Build** - Nur ESM exportieren, sonst gibt es `createContext is not a function` Fehler

2. **dist/ MUSS committed werden** - Für GitHub Installs muss der dist-Ordner im Repository sein

3. **Alle Dependencies als peerDependencies** - Die Library soll keine eigenen Versionen bundlen

4. **Icons separat importieren** - Icons NICHT re-exportieren, stattdessen dokumentieren:

   ```tsx
   // Icons direkt importieren von:
   import { HeartIcon } from "@heroicons/react/24/solid";
   ```

5. **ThemeProvider Alternative dokumentieren** - Falls VibeUIProvider nicht funktioniert:

   ```tsx
   import { ThemeProvider } from "@material-tailwind/react";
   import { vibeTheme } from "vibe-ui-library";

   <ThemeProvider value={vibeTheme}>{children}</ThemeProvider>;
   ```

6. **Neueste Versionen nutzen** - Immer mit `npm view PACKAGE version` die aktuelle Version prüfen

## Ergebnis

Nach Fertigstellung sollte die Library so nutzbar sein:

```tsx
import { VibeUIProvider, Button, Card, Typography } from "vibe-ui-library";

function App() {
  return (
    <VibeUIProvider>
      <Card>
        <Typography variant="h1">Hello Vibe!</Typography>
        <Button color="pink">Click me</Button>
      </Card>
    </VibeUIProvider>
  );
}
```

## Referenz

Diese Anleitung basiert auf dem Projekt [vibe-ui-library](https://github.com/movefastbreakthings/vibe-ui-library), das dasselbe für Material UI implementiert.
