// ============================================================================
// VIBE UI LIBRARY
// Eine Material UI basierte Komponenten-Bibliothek mit knalligem Pink-Akzent
// ============================================================================

// ---------------------------------------------------------------------------
// Custom Theme & Provider
// ---------------------------------------------------------------------------
export {
  vibeTheme,
  vibeDarkTheme,
  vibeThemeOptions,
  vibeDarkThemeOptions,
  vibePink,
  vibePurple,
} from "./theme";

export { VibeUIProvider, useVibeTheme } from "./components";
export type { VibeUIProviderProps } from "./components";

// ---------------------------------------------------------------------------
// Re-export all Material UI Components
// ---------------------------------------------------------------------------

// Layout
export {
  Box,
  Container,
  Grid,
  Grid2,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

// Inputs
export {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  NativeSelect,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

// Data Display
export {
  Avatar,
  AvatarGroup,
  Badge,
  Chip,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";

// Feedback
export {
  Alert,
  AlertTitle,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Skeleton,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

// Surfaces
export {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Toolbar,
} from "@mui/material";

// Navigation
export {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Drawer,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Pagination,
  PaginationItem,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TabScrollButton,
  MobileStepper,
} from "@mui/material";

// Utils
export {
  ClickAwayListener,
  CssBaseline,
  GlobalStyles,
  Modal,
  NoSsr,
  Popover,
  Popper,
  Portal,
  TextareaAutosize,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
  Grow,
  Slide,
  Collapse,
  Fade,
} from "@mui/material";

// Theming & Styling
export {
  ThemeProvider,
  createTheme,
  useTheme,
  styled,
  alpha,
  darken,
  lighten,
  emphasize,
  getContrastRatio,
  useColorScheme,
} from "@mui/material";

// System
export { useThemeProps } from "@mui/material";

// Types re-exports
export type {
  AlertColor,
  AlertPropsColorOverrides,
  AutocompleteProps,
  BadgeProps,
  BoxProps,
  ButtonProps,
  CardProps,
  CheckboxProps,
  ChipProps,
  ContainerProps,
  DialogProps,
  DividerProps,
  DrawerProps,
  FabProps,
  FormControlProps,
  GridProps,
  IconButtonProps,
  InputProps,
  LinearProgressProps,
  LinkProps,
  ListProps,
  ListItemProps,
  MenuProps,
  MenuItemProps,
  ModalProps,
  PaginationProps,
  PaperProps,
  PopoverProps,
  RadioProps,
  RatingProps,
  SelectProps,
  SliderProps,
  SnackbarProps,
  StackProps,
  StepProps,
  SwitchProps,
  TabProps,
  TabsProps,
  TableProps,
  TextFieldProps,
  Theme,
  ThemeOptions,
  ToggleButtonProps,
  TooltipProps,
  TypographyProps,
} from "@mui/material";

// ---------------------------------------------------------------------------
// Re-export Material Icons
// ---------------------------------------------------------------------------
export * from "@mui/icons-material";
