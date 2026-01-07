'use strict';

var styles = require('@mui/material/styles');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var material = require('@mui/material');
var iconsMaterial = require('@mui/icons-material');

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
const vibeTheme = styles.createTheme(vibeThemeOptions);
const vibeDarkTheme = styles.createTheme(vibeDarkThemeOptions);
// Export der Pink-Farben für direkten Zugriff
const vibePink = VIBE_PINK;
const vibePurple = VIBE_PURPLE;

const VibeContext = react.createContext(undefined);
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
    const [mode, setMode] = react.useState(defaultMode);
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    const theme = react.useMemo(() => {
        return mode === "light" ? vibeTheme : vibeDarkTheme;
    }, [mode]);
    const contextValue = react.useMemo(() => ({
        mode,
        toggleMode,
        setMode,
    }), [mode]);
    return (jsxRuntime.jsx(VibeContext.Provider, { value: contextValue, children: jsxRuntime.jsxs(material.ThemeProvider, { theme: theme, children: [!disableCssBaseline && jsxRuntime.jsx(material.CssBaseline, {}), children] }) }));
};
/**
 * Hook zum Zugriff auf den Vibe Theme Context
 */
const useVibeTheme = () => {
    const context = react.useContext(VibeContext);
    if (context === undefined) {
        throw new Error("useVibeTheme must be used within a VibeUIProvider");
    }
    return context;
};

Object.defineProperty(exports, "Accordion", {
    enumerable: true,
    get: function () { return material.Accordion; }
});
Object.defineProperty(exports, "AccordionActions", {
    enumerable: true,
    get: function () { return material.AccordionActions; }
});
Object.defineProperty(exports, "AccordionDetails", {
    enumerable: true,
    get: function () { return material.AccordionDetails; }
});
Object.defineProperty(exports, "AccordionSummary", {
    enumerable: true,
    get: function () { return material.AccordionSummary; }
});
Object.defineProperty(exports, "Alert", {
    enumerable: true,
    get: function () { return material.Alert; }
});
Object.defineProperty(exports, "AlertTitle", {
    enumerable: true,
    get: function () { return material.AlertTitle; }
});
Object.defineProperty(exports, "AppBar", {
    enumerable: true,
    get: function () { return material.AppBar; }
});
Object.defineProperty(exports, "Autocomplete", {
    enumerable: true,
    get: function () { return material.Autocomplete; }
});
Object.defineProperty(exports, "Avatar", {
    enumerable: true,
    get: function () { return material.Avatar; }
});
Object.defineProperty(exports, "AvatarGroup", {
    enumerable: true,
    get: function () { return material.AvatarGroup; }
});
Object.defineProperty(exports, "Backdrop", {
    enumerable: true,
    get: function () { return material.Backdrop; }
});
Object.defineProperty(exports, "Badge", {
    enumerable: true,
    get: function () { return material.Badge; }
});
Object.defineProperty(exports, "BottomNavigation", {
    enumerable: true,
    get: function () { return material.BottomNavigation; }
});
Object.defineProperty(exports, "BottomNavigationAction", {
    enumerable: true,
    get: function () { return material.BottomNavigationAction; }
});
Object.defineProperty(exports, "Box", {
    enumerable: true,
    get: function () { return material.Box; }
});
Object.defineProperty(exports, "Breadcrumbs", {
    enumerable: true,
    get: function () { return material.Breadcrumbs; }
});
Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function () { return material.Button; }
});
Object.defineProperty(exports, "ButtonGroup", {
    enumerable: true,
    get: function () { return material.ButtonGroup; }
});
Object.defineProperty(exports, "Card", {
    enumerable: true,
    get: function () { return material.Card; }
});
Object.defineProperty(exports, "CardActionArea", {
    enumerable: true,
    get: function () { return material.CardActionArea; }
});
Object.defineProperty(exports, "CardActions", {
    enumerable: true,
    get: function () { return material.CardActions; }
});
Object.defineProperty(exports, "CardContent", {
    enumerable: true,
    get: function () { return material.CardContent; }
});
Object.defineProperty(exports, "CardHeader", {
    enumerable: true,
    get: function () { return material.CardHeader; }
});
Object.defineProperty(exports, "CardMedia", {
    enumerable: true,
    get: function () { return material.CardMedia; }
});
Object.defineProperty(exports, "Checkbox", {
    enumerable: true,
    get: function () { return material.Checkbox; }
});
Object.defineProperty(exports, "Chip", {
    enumerable: true,
    get: function () { return material.Chip; }
});
Object.defineProperty(exports, "CircularProgress", {
    enumerable: true,
    get: function () { return material.CircularProgress; }
});
Object.defineProperty(exports, "ClickAwayListener", {
    enumerable: true,
    get: function () { return material.ClickAwayListener; }
});
Object.defineProperty(exports, "Collapse", {
    enumerable: true,
    get: function () { return material.Collapse; }
});
Object.defineProperty(exports, "Container", {
    enumerable: true,
    get: function () { return material.Container; }
});
Object.defineProperty(exports, "CssBaseline", {
    enumerable: true,
    get: function () { return material.CssBaseline; }
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function () { return material.Dialog; }
});
Object.defineProperty(exports, "DialogActions", {
    enumerable: true,
    get: function () { return material.DialogActions; }
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function () { return material.DialogContent; }
});
Object.defineProperty(exports, "DialogContentText", {
    enumerable: true,
    get: function () { return material.DialogContentText; }
});
Object.defineProperty(exports, "DialogTitle", {
    enumerable: true,
    get: function () { return material.DialogTitle; }
});
Object.defineProperty(exports, "Divider", {
    enumerable: true,
    get: function () { return material.Divider; }
});
Object.defineProperty(exports, "Drawer", {
    enumerable: true,
    get: function () { return material.Drawer; }
});
Object.defineProperty(exports, "Fab", {
    enumerable: true,
    get: function () { return material.Fab; }
});
Object.defineProperty(exports, "Fade", {
    enumerable: true,
    get: function () { return material.Fade; }
});
Object.defineProperty(exports, "FilledInput", {
    enumerable: true,
    get: function () { return material.FilledInput; }
});
Object.defineProperty(exports, "FormControl", {
    enumerable: true,
    get: function () { return material.FormControl; }
});
Object.defineProperty(exports, "FormControlLabel", {
    enumerable: true,
    get: function () { return material.FormControlLabel; }
});
Object.defineProperty(exports, "FormGroup", {
    enumerable: true,
    get: function () { return material.FormGroup; }
});
Object.defineProperty(exports, "FormHelperText", {
    enumerable: true,
    get: function () { return material.FormHelperText; }
});
Object.defineProperty(exports, "FormLabel", {
    enumerable: true,
    get: function () { return material.FormLabel; }
});
Object.defineProperty(exports, "GlobalStyles", {
    enumerable: true,
    get: function () { return material.GlobalStyles; }
});
Object.defineProperty(exports, "Grid", {
    enumerable: true,
    get: function () { return material.Grid; }
});
Object.defineProperty(exports, "Grid2", {
    enumerable: true,
    get: function () { return material.Grid2; }
});
Object.defineProperty(exports, "Grow", {
    enumerable: true,
    get: function () { return material.Grow; }
});
Object.defineProperty(exports, "Icon", {
    enumerable: true,
    get: function () { return material.Icon; }
});
Object.defineProperty(exports, "IconButton", {
    enumerable: true,
    get: function () { return material.IconButton; }
});
Object.defineProperty(exports, "ImageList", {
    enumerable: true,
    get: function () { return material.ImageList; }
});
Object.defineProperty(exports, "ImageListItem", {
    enumerable: true,
    get: function () { return material.ImageListItem; }
});
Object.defineProperty(exports, "ImageListItemBar", {
    enumerable: true,
    get: function () { return material.ImageListItemBar; }
});
Object.defineProperty(exports, "Input", {
    enumerable: true,
    get: function () { return material.Input; }
});
Object.defineProperty(exports, "InputAdornment", {
    enumerable: true,
    get: function () { return material.InputAdornment; }
});
Object.defineProperty(exports, "InputBase", {
    enumerable: true,
    get: function () { return material.InputBase; }
});
Object.defineProperty(exports, "InputLabel", {
    enumerable: true,
    get: function () { return material.InputLabel; }
});
Object.defineProperty(exports, "LinearProgress", {
    enumerable: true,
    get: function () { return material.LinearProgress; }
});
Object.defineProperty(exports, "Link", {
    enumerable: true,
    get: function () { return material.Link; }
});
Object.defineProperty(exports, "List", {
    enumerable: true,
    get: function () { return material.List; }
});
Object.defineProperty(exports, "ListItem", {
    enumerable: true,
    get: function () { return material.ListItem; }
});
Object.defineProperty(exports, "ListItemAvatar", {
    enumerable: true,
    get: function () { return material.ListItemAvatar; }
});
Object.defineProperty(exports, "ListItemButton", {
    enumerable: true,
    get: function () { return material.ListItemButton; }
});
Object.defineProperty(exports, "ListItemIcon", {
    enumerable: true,
    get: function () { return material.ListItemIcon; }
});
Object.defineProperty(exports, "ListItemSecondaryAction", {
    enumerable: true,
    get: function () { return material.ListItemSecondaryAction; }
});
Object.defineProperty(exports, "ListItemText", {
    enumerable: true,
    get: function () { return material.ListItemText; }
});
Object.defineProperty(exports, "ListSubheader", {
    enumerable: true,
    get: function () { return material.ListSubheader; }
});
Object.defineProperty(exports, "Menu", {
    enumerable: true,
    get: function () { return material.Menu; }
});
Object.defineProperty(exports, "MenuItem", {
    enumerable: true,
    get: function () { return material.MenuItem; }
});
Object.defineProperty(exports, "MenuList", {
    enumerable: true,
    get: function () { return material.MenuList; }
});
Object.defineProperty(exports, "MobileStepper", {
    enumerable: true,
    get: function () { return material.MobileStepper; }
});
Object.defineProperty(exports, "Modal", {
    enumerable: true,
    get: function () { return material.Modal; }
});
Object.defineProperty(exports, "NativeSelect", {
    enumerable: true,
    get: function () { return material.NativeSelect; }
});
Object.defineProperty(exports, "NoSsr", {
    enumerable: true,
    get: function () { return material.NoSsr; }
});
Object.defineProperty(exports, "OutlinedInput", {
    enumerable: true,
    get: function () { return material.OutlinedInput; }
});
Object.defineProperty(exports, "Pagination", {
    enumerable: true,
    get: function () { return material.Pagination; }
});
Object.defineProperty(exports, "PaginationItem", {
    enumerable: true,
    get: function () { return material.PaginationItem; }
});
Object.defineProperty(exports, "Paper", {
    enumerable: true,
    get: function () { return material.Paper; }
});
Object.defineProperty(exports, "Popover", {
    enumerable: true,
    get: function () { return material.Popover; }
});
Object.defineProperty(exports, "Popper", {
    enumerable: true,
    get: function () { return material.Popper; }
});
Object.defineProperty(exports, "Portal", {
    enumerable: true,
    get: function () { return material.Portal; }
});
Object.defineProperty(exports, "Radio", {
    enumerable: true,
    get: function () { return material.Radio; }
});
Object.defineProperty(exports, "RadioGroup", {
    enumerable: true,
    get: function () { return material.RadioGroup; }
});
Object.defineProperty(exports, "Rating", {
    enumerable: true,
    get: function () { return material.Rating; }
});
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function () { return material.Select; }
});
Object.defineProperty(exports, "Skeleton", {
    enumerable: true,
    get: function () { return material.Skeleton; }
});
Object.defineProperty(exports, "Slide", {
    enumerable: true,
    get: function () { return material.Slide; }
});
Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function () { return material.Slider; }
});
Object.defineProperty(exports, "Snackbar", {
    enumerable: true,
    get: function () { return material.Snackbar; }
});
Object.defineProperty(exports, "SnackbarContent", {
    enumerable: true,
    get: function () { return material.SnackbarContent; }
});
Object.defineProperty(exports, "SpeedDial", {
    enumerable: true,
    get: function () { return material.SpeedDial; }
});
Object.defineProperty(exports, "SpeedDialAction", {
    enumerable: true,
    get: function () { return material.SpeedDialAction; }
});
Object.defineProperty(exports, "SpeedDialIcon", {
    enumerable: true,
    get: function () { return material.SpeedDialIcon; }
});
Object.defineProperty(exports, "Stack", {
    enumerable: true,
    get: function () { return material.Stack; }
});
Object.defineProperty(exports, "Step", {
    enumerable: true,
    get: function () { return material.Step; }
});
Object.defineProperty(exports, "StepButton", {
    enumerable: true,
    get: function () { return material.StepButton; }
});
Object.defineProperty(exports, "StepConnector", {
    enumerable: true,
    get: function () { return material.StepConnector; }
});
Object.defineProperty(exports, "StepContent", {
    enumerable: true,
    get: function () { return material.StepContent; }
});
Object.defineProperty(exports, "StepIcon", {
    enumerable: true,
    get: function () { return material.StepIcon; }
});
Object.defineProperty(exports, "StepLabel", {
    enumerable: true,
    get: function () { return material.StepLabel; }
});
Object.defineProperty(exports, "Stepper", {
    enumerable: true,
    get: function () { return material.Stepper; }
});
Object.defineProperty(exports, "SvgIcon", {
    enumerable: true,
    get: function () { return material.SvgIcon; }
});
Object.defineProperty(exports, "Switch", {
    enumerable: true,
    get: function () { return material.Switch; }
});
Object.defineProperty(exports, "Tab", {
    enumerable: true,
    get: function () { return material.Tab; }
});
Object.defineProperty(exports, "TabScrollButton", {
    enumerable: true,
    get: function () { return material.TabScrollButton; }
});
Object.defineProperty(exports, "Table", {
    enumerable: true,
    get: function () { return material.Table; }
});
Object.defineProperty(exports, "TableBody", {
    enumerable: true,
    get: function () { return material.TableBody; }
});
Object.defineProperty(exports, "TableCell", {
    enumerable: true,
    get: function () { return material.TableCell; }
});
Object.defineProperty(exports, "TableContainer", {
    enumerable: true,
    get: function () { return material.TableContainer; }
});
Object.defineProperty(exports, "TableFooter", {
    enumerable: true,
    get: function () { return material.TableFooter; }
});
Object.defineProperty(exports, "TableHead", {
    enumerable: true,
    get: function () { return material.TableHead; }
});
Object.defineProperty(exports, "TablePagination", {
    enumerable: true,
    get: function () { return material.TablePagination; }
});
Object.defineProperty(exports, "TableRow", {
    enumerable: true,
    get: function () { return material.TableRow; }
});
Object.defineProperty(exports, "TableSortLabel", {
    enumerable: true,
    get: function () { return material.TableSortLabel; }
});
Object.defineProperty(exports, "Tabs", {
    enumerable: true,
    get: function () { return material.Tabs; }
});
Object.defineProperty(exports, "TextField", {
    enumerable: true,
    get: function () { return material.TextField; }
});
Object.defineProperty(exports, "TextareaAutosize", {
    enumerable: true,
    get: function () { return material.TextareaAutosize; }
});
Object.defineProperty(exports, "ThemeProvider", {
    enumerable: true,
    get: function () { return material.ThemeProvider; }
});
Object.defineProperty(exports, "ToggleButton", {
    enumerable: true,
    get: function () { return material.ToggleButton; }
});
Object.defineProperty(exports, "ToggleButtonGroup", {
    enumerable: true,
    get: function () { return material.ToggleButtonGroup; }
});
Object.defineProperty(exports, "Toolbar", {
    enumerable: true,
    get: function () { return material.Toolbar; }
});
Object.defineProperty(exports, "Tooltip", {
    enumerable: true,
    get: function () { return material.Tooltip; }
});
Object.defineProperty(exports, "Typography", {
    enumerable: true,
    get: function () { return material.Typography; }
});
Object.defineProperty(exports, "Zoom", {
    enumerable: true,
    get: function () { return material.Zoom; }
});
Object.defineProperty(exports, "alpha", {
    enumerable: true,
    get: function () { return material.alpha; }
});
Object.defineProperty(exports, "createTheme", {
    enumerable: true,
    get: function () { return material.createTheme; }
});
Object.defineProperty(exports, "darken", {
    enumerable: true,
    get: function () { return material.darken; }
});
Object.defineProperty(exports, "emphasize", {
    enumerable: true,
    get: function () { return material.emphasize; }
});
Object.defineProperty(exports, "getContrastRatio", {
    enumerable: true,
    get: function () { return material.getContrastRatio; }
});
Object.defineProperty(exports, "lighten", {
    enumerable: true,
    get: function () { return material.lighten; }
});
Object.defineProperty(exports, "styled", {
    enumerable: true,
    get: function () { return material.styled; }
});
Object.defineProperty(exports, "useColorScheme", {
    enumerable: true,
    get: function () { return material.useColorScheme; }
});
Object.defineProperty(exports, "useMediaQuery", {
    enumerable: true,
    get: function () { return material.useMediaQuery; }
});
Object.defineProperty(exports, "useScrollTrigger", {
    enumerable: true,
    get: function () { return material.useScrollTrigger; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return material.useTheme; }
});
Object.defineProperty(exports, "useThemeProps", {
    enumerable: true,
    get: function () { return material.useThemeProps; }
});
exports.VibeUIProvider = VibeUIProvider;
exports.useVibeTheme = useVibeTheme;
exports.vibeDarkTheme = vibeDarkTheme;
exports.vibeDarkThemeOptions = vibeDarkThemeOptions;
exports.vibePink = vibePink;
exports.vibePurple = vibePurple;
exports.vibeTheme = vibeTheme;
exports.vibeThemeOptions = vibeThemeOptions;
Object.keys(iconsMaterial).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () { return iconsMaterial[k]; }
    });
});
