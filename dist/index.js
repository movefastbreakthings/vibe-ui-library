import { createTheme } from '@mui/material/styles';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
export { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, GlobalStyles, Grid, Grid2, Grow, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, Select, Skeleton, Slide, Slider, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper, SvgIcon, Switch, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, alpha, createTheme, darken, emphasize, getContrastRatio, lighten, styled, useColorScheme, useMediaQuery, useScrollTrigger, useTheme, useThemeProps } from '@mui/material';

// Knalliges Pink als Hauptakzentfarbe
const VIBE_PINK = {
    50: '#fce4ec',
    100: '#f8bbd9',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#ff0080', // Hauptfarbe - knalliges Pink/Magenta
    600: '#e91e63',
    700: '#d81b60',
    800: '#c2185b',
    900: '#ad1457',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#ff0080',
    A700: '#c51162',
};
// Sekundärfarbe - Electric Purple für Kontrast
const VIBE_PURPLE = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
};
const vibeThemeOptions = {
    palette: {
        primary: {
            main: VIBE_PINK[500],
            light: VIBE_PINK[300],
            dark: VIBE_PINK[700],
            contrastText: '#ffffff',
        },
        secondary: {
            main: VIBE_PURPLE[500],
            light: VIBE_PURPLE[300],
            dark: VIBE_PURPLE[700],
            contrastText: '#ffffff',
        },
        error: {
            main: '#ff1744',
        },
        warning: {
            main: '#ff9100',
        },
        info: {
            main: '#00b0ff',
        },
        success: {
            main: '#00e676',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(255, 0, 128, 0.3)',
                    },
                },
                containedPrimary: {
                    background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
                    '&:hover': {
                        background: `linear-gradient(135deg, ${VIBE_PINK[400]} 0%, ${VIBE_PINK[500]} 100%)`,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
                colorPrimary: {
                    background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: VIBE_PINK[500],
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                primary: {
                    background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
                    '&:hover': {
                        background: `linear-gradient(135deg, ${VIBE_PINK[400]} 0%, ${VIBE_PINK[500]} 100%)`,
                    },
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    '&.Mui-checked': {
                        color: VIBE_PINK[500],
                        '& + .MuiSwitch-track': {
                            backgroundColor: VIBE_PINK[500],
                        },
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: VIBE_PINK[500],
                    },
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: VIBE_PINK[500],
                    },
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: VIBE_PINK[500],
                },
                thumb: {
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0 0 0 8px rgba(255, 0, 128, 0.16)`,
                    },
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                },
                barColorPrimary: {
                    background: `linear-gradient(90deg, ${VIBE_PINK[500]} 0%, ${VIBE_PURPLE[500]} 100%)`,
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: {
                    color: VIBE_PINK[500],
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: VIBE_PINK[500],
                    height: 3,
                    borderRadius: 2,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: VIBE_PINK[500],
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: VIBE_PINK[500],
                    '&:hover': {
                        color: VIBE_PINK[700],
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 20,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.87)',
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: VIBE_PINK[500],
                },
            },
        },
    },
};
// Dark Theme Variante
const vibeDarkThemeOptions = {
    ...vibeThemeOptions,
    palette: {
        mode: 'dark',
        primary: {
            main: VIBE_PINK[400],
            light: VIBE_PINK[200],
            dark: VIBE_PINK[600],
            contrastText: '#ffffff',
        },
        secondary: {
            main: VIBE_PURPLE[400],
            light: VIBE_PURPLE[200],
            dark: VIBE_PURPLE[600],
            contrastText: '#ffffff',
        },
        error: {
            main: '#ff5252',
        },
        warning: {
            main: '#ffab40',
        },
        info: {
            main: '#40c4ff',
        },
        success: {
            main: '#69f0ae',
        },
        background: {
            default: '#0a0a0a',
            paper: '#1a1a1a',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
};
// Erstelle die Themes
const vibeTheme = createTheme(vibeThemeOptions);
const vibeDarkTheme = createTheme(vibeDarkThemeOptions);
// Export der Pink-Farben für direkten Zugriff
const vibePink = VIBE_PINK;
const vibePurple = VIBE_PURPLE;

const VibeContext = createContext(undefined);
/**
 * VibeUIProvider - Wrapper-Komponente für die Vibe UI Library
 *
 * Stellt das Theme bereit und ermöglicht das Umschalten zwischen Light/Dark Mode.
 *
 * @example
 * ```tsx
 * import { VibeUIProvider, Button } from 'vibe-ui-library';
 *
 * function App() {
 *   return (
 *     <VibeUIProvider defaultMode="light">
 *       <Button variant="contained">Vibe Button</Button>
 *     </VibeUIProvider>
 *   );
 * }
 * ```
 */
const VibeUIProvider = ({ children, defaultMode = "light", disableCssBaseline = false, }) => {
    const [mode, setMode] = useState(defaultMode);
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    const theme = useMemo(() => {
        return mode === "light" ? vibeTheme : vibeDarkTheme;
    }, [mode]);
    const contextValue = useMemo(() => ({
        mode,
        toggleMode,
        setMode,
    }), [mode]);
    return (jsx(VibeContext.Provider, { value: contextValue, children: jsxs(ThemeProvider, { theme: theme, children: [!disableCssBaseline && jsx(CssBaseline, {}), children] }) }));
};
/**
 * Hook zum Zugriff auf den Vibe Theme Context
 */
const useVibeTheme = () => {
    const context = useContext(VibeContext);
    if (context === undefined) {
        throw new Error("useVibeTheme must be used within a VibeUIProvider");
    }
    return context;
};

export { VibeUIProvider, useVibeTheme, vibeDarkTheme, vibeDarkThemeOptions, vibePink, vibePurple, vibeTheme, vibeThemeOptions };
