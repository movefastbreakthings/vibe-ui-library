# AI Context: Vibe UI Library

**Kopiere diesen Prompt in dein KI-Tool (ChatGPT, Claude, Cursor, etc.) als System-Prompt oder Kontext, damit die KI diese Library verwendet.**

---

## PROMPT

```
Du verwendest die "vibe-ui-library" für alle React UI-Komponenten.

WICHTIG: Erstelle KEINE eigenen UI-Komponenten, Styles oder CSS. Verwende IMMER die vibe-ui-library.

## Installation
Die Library ist bereits installiert via:
npm install vibe-ui-library

## Grundstruktur

Jede App MUSS mit dem VibeUIProvider umschlossen sein:

import { VibeUIProvider } from 'vibe-ui-library';

function App() {
  return (
    <VibeUIProvider defaultMode="light">
      {/* Dein Content hier */}
    </VibeUIProvider>
  );
}

## Verfügbare Komponenten (alle von vibe-ui-library importieren!)

### Layout
Box, Container, Grid, Stack, Paper

### Buttons & Inputs
Button, IconButton, Fab, TextField, Checkbox, Switch, Slider, Rating, Select, Autocomplete, ToggleButton, ToggleButtonGroup

### Typography & Text
Typography (variants: h1-h6, body1, body2, subtitle1, subtitle2, caption, overline)

### Data Display
Chip, Avatar, AvatarGroup, Badge, Divider, List, ListItem, ListItemText, ListItemIcon, Table, TableHead, TableBody, TableRow, TableCell, Tooltip

### Feedback
Alert, AlertTitle, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress, LinearProgress, Skeleton

### Surfaces
Card, CardHeader, CardContent, CardActions, CardMedia, AppBar, Toolbar, Accordion, AccordionSummary, AccordionDetails

### Navigation
Tabs, Tab, Menu, MenuItem, Breadcrumbs, Link, Pagination, Drawer, BottomNavigation, SpeedDial

### Icons (alle Material Icons verfügbar)
Favorite, Star, Home, Settings, Person, Mail, Phone, Search, Add, Delete, Edit, Share, Download, DarkMode, LightMode, Menu, Close, Check, ArrowBack, ArrowForward, etc.

## Beispiel-Imports

// Komponenten und Icons aus derselben Library importieren:
import {
  VibeUIProvider,
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Favorite,
  Star,
  ArrowForward
} from 'vibe-ui-library';

## Theme-Farben

Primary: Knalliges Pink (#ff0080)
Secondary: Electric Purple (#9c27b0)
Success: #00e676
Error: #ff1744
Warning: #ff9100
Info: #00b0ff

Verwende diese über die sx prop:
<Box sx={{ bgcolor: 'primary.main', color: 'white' }}>Pink Box</Box>
<Typography color="primary">Pink Text</Typography>
<Button color="secondary">Purple Button</Button>

## Dark Mode

Der VibeUIProvider unterstützt Dark Mode:

import { useVibeTheme, IconButton, DarkMode, LightMode } from 'vibe-ui-library';

function ThemeToggle() {
  const { mode, toggleMode } = useVibeTheme();
  return (
    <IconButton onClick={toggleMode}>
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}

## Styling-Regeln

1. KEIN eigenes CSS schreiben - nutze die sx prop
2. KEINE Tailwind/andere CSS Frameworks
3. Abstände über sx: sx={{ m: 2, p: 3, gap: 2 }} (Einheit = 8px)
4. Responsive: sx={{ width: { xs: '100%', md: '50%' } }}

## Typische Patterns

### Hero Section
<Box sx={{ textAlign: 'center', py: 8 }}>
  <Typography variant="h2" gutterBottom>Headline</Typography>
  <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
    Subheadline
  </Typography>
  <Button variant="contained" size="large">CTA Button</Button>
</Box>

### Card Grid
<Grid container spacing={4}>
  <Grid size={{ xs: 12, md: 4 }}>
    <Card>
      <CardContent>
        <Typography variant="h6">Title</Typography>
        <Typography color="text.secondary">Description</Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

### Form
<Stack spacing={3}>
  <TextField label="Name" fullWidth />
  <TextField label="Email" type="email" fullWidth />
  <Button variant="contained" fullWidth>Submit</Button>
</Stack>

### Navigation AppBar
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>Logo</Typography>
    <Button color="inherit">Link 1</Button>
    <Button color="inherit">Link 2</Button>
  </Toolbar>
</AppBar>

## WICHTIG

- Alle Komponenten haben bereits das Pink-Theme
- Buttons haben Gradient-Effekte eingebaut
- Cards haben abgerundete Ecken und Schatten
- Keine zusätzlichen Styles nötig für modernes Aussehen
```

---

## Kurze Version (für Chat-Prompts)

```
Verwende die vibe-ui-library (basiert auf Material UI mit Pink-Theme).
Import: import { VibeUIProvider, Button, Typography, Box, ... } from 'vibe-ui-library'
Alle Icons: import { Favorite, Star, Home, ... } from 'vibe-ui-library'
Wrapper: <VibeUIProvider>{children}</VibeUIProvider>
Primary Color: Pink (#ff0080)
Kein eigenes CSS - nutze sx prop!
```
