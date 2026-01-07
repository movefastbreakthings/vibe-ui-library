import * as _mui_material from '@mui/material';
export { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertColor, AlertPropsColorOverrides, AlertTitle, AppBar, Autocomplete, AutocompleteProps, Avatar, AvatarGroup, Backdrop, Badge, BadgeProps, BottomNavigation, BottomNavigationAction, Box, BoxProps, Breadcrumbs, Button, ButtonGroup, ButtonProps, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, CardProps, Checkbox, CheckboxProps, Chip, ChipProps, CircularProgress, ClickAwayListener, Collapse, Container, ContainerProps, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Divider, DividerProps, Drawer, DrawerProps, Fab, FabProps, Fade, FilledInput, FormControl, FormControlLabel, FormControlProps, FormGroup, FormHelperText, FormLabel, GlobalStyles, Grid, Grid2, GridProps, Grow, Icon, IconButton, IconButtonProps, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, InputProps, LinearProgress, LinearProgressProps, Link, LinkProps, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemProps, ListItemSecondaryAction, ListItemText, ListProps, ListSubheader, Menu, MenuItem, MenuItemProps, MenuList, MenuProps, MobileStepper, Modal, ModalProps, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, PaginationProps, Paper, PaperProps, Popover, PopoverProps, Popper, Portal, Radio, RadioGroup, RadioProps, Rating, RatingProps, Select, SelectProps, Skeleton, Slide, Slider, SliderProps, Snackbar, SnackbarContent, SnackbarProps, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, StackProps, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, StepProps, Stepper, SvgIcon, Switch, SwitchProps, Tab, TabProps, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableProps, TableRow, TableSortLabel, Tabs, TabsProps, TextField, TextFieldProps, TextareaAutosize, Theme, ThemeOptions, ThemeProvider, ToggleButton, ToggleButtonGroup, ToggleButtonProps, Toolbar, Tooltip, TooltipProps, Typography, TypographyProps, Zoom, alpha, createTheme, darken, emphasize, getContrastRatio, lighten, styled, useColorScheme, useMediaQuery, useScrollTrigger, useTheme, useThemeProps } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import React, { ReactNode } from 'react';
export * from '@mui/icons-material';

declare const vibeThemeOptions: ThemeOptions;
declare const vibeDarkThemeOptions: ThemeOptions;
declare const vibeTheme: _mui_material.Theme;
declare const vibeDarkTheme: _mui_material.Theme;
declare const vibePink: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
};
declare const vibePurple: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
};

type ThemeMode = "light" | "dark";
interface VibeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
    setMode: (mode: ThemeMode) => void;
}
interface VibeUIProviderProps {
    children: ReactNode;
    defaultMode?: ThemeMode;
    disableCssBaseline?: boolean;
}
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
declare const VibeUIProvider: React.FC<VibeUIProviderProps>;
/**
 * Hook zum Zugriff auf den Vibe Theme Context
 */
declare const useVibeTheme: () => VibeContextType;

export { VibeUIProvider, useVibeTheme, vibeDarkTheme, vibeDarkThemeOptions, vibePink, vibePurple, vibeTheme, vibeThemeOptions };
export type { VibeUIProviderProps };
