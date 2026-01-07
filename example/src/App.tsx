import { useState } from "react";
import {
  VibeUIProvider,
  useVibeTheme,
  // Layout
  Box,
  Container,
  Stack,
  Grid,
  // Inputs
  Button,
  TextField,
  Checkbox,
  Switch,
  Slider,
  Rating,
  Fab,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  // Data Display
  Typography,
  Chip,
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  Tooltip,
  // Feedback
  Alert,
  AlertTitle,
  CircularProgress,
  LinearProgress,
  Snackbar,
  // Surfaces
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Paper,
  AppBar,
  Toolbar,
  // Navigation
  Tabs,
  Tab,
  Link,
  Breadcrumbs,
  // Icons
  Favorite,
  Add,
  Send,
  Notifications,
  DarkMode,
  LightMode,
  Star,
  Home,
  Settings,
  Person,
  Mail,
  Phone,
  LocationOn,
  Check,
  Close,
  Search,
  ShoppingCart,
  Delete,
  Edit,
  Share,
  Download,
  Bolt,
} from "vibe-ui-library";

function ThemeToggle() {
  const { mode, toggleMode } = useVibeTheme();
  return (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
      <IconButton onClick={toggleMode} color="inherit">
        {mode === "light" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}

function DemoContent() {
  const [tabValue, setTabValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(70);
  const [rating, setRating] = useState<number | null>(4);
  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alignment, setAlignment] = useState("left");

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Bolt sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vibe UI Library
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            ✨ Vibe UI Demo
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            Material UI mit knalligem Pink-Akzent
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" startIcon={<Favorite />}>
              Primary Button
            </Button>
            <Button variant="outlined" size="large" startIcon={<Star />}>
              Outlined
            </Button>
            <Button variant="text" size="large">
              Text Button
            </Button>
          </Stack>
        </Box>

        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link underline="hover" color="inherit" href="#">
            <Home
              sx={{ mr: 0.5, fontSize: 20, verticalAlign: "text-bottom" }}
            />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Components
          </Link>
          <Typography color="primary">Demo</Typography>
        </Breadcrumbs>

        {/* Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)} centered>
            <Tab icon={<Home />} label="Overview" />
            <Tab icon={<Settings />} label="Settings" />
            <Tab icon={<Person />} label="Profile" />
          </Tabs>
        </Paper>

        <Grid container spacing={5}>
          {/* Buttons & Inputs Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "primary.main" }}>B</Avatar>}
                title="Buttons & Inputs"
                subheader="Interactive components"
              />
              <CardContent>
                <Stack spacing={4}>
                  {/* Button variants */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Button Variants
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      <Button variant="contained">Contained</Button>
                      <Button variant="outlined">Outlined</Button>
                      <Button variant="text">Text</Button>
                      <Button variant="contained" color="secondary">
                        Secondary
                      </Button>
                    </Stack>
                  </Box>

                  {/* Icon Buttons */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Icon Buttons
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton color="primary">
                        <Favorite />
                      </IconButton>
                      <IconButton color="primary">
                        <Share />
                      </IconButton>
                      <IconButton color="primary">
                        <Download />
                      </IconButton>
                      <IconButton color="primary">
                        <Delete />
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* FAB */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Floating Action Buttons
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Fab color="primary" size="small">
                        <Add />
                      </Fab>
                      <Fab color="primary">
                        <Add />
                      </Fab>
                      <Fab variant="extended" color="primary">
                        <Add sx={{ mr: 1 }} />
                        Create New
                      </Fab>
                    </Stack>
                  </Box>

                  {/* Toggle Buttons */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Toggle Buttons
                    </Typography>
                    <ToggleButtonGroup
                      value={alignment}
                      exclusive
                      onChange={(_, v) => v && setAlignment(v)}
                      color="primary"
                    >
                      <ToggleButton value="left">
                        <Edit />
                      </ToggleButton>
                      <ToggleButton value="center">
                        <Share />
                      </ToggleButton>
                      <ToggleButton value="right">
                        <Delete />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>

                  {/* Text Field */}
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    placeholder="your@email.com"
                    fullWidth
                  />

                  {/* Checkbox & Switch */}
                  <Stack direction="row" alignItems="center" spacing={4}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                      <Typography>Checkbox</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Switch
                        checked={switchOn}
                        onChange={(e) => setSwitchOn(e.target.checked)}
                      />
                      <Typography>Switch</Typography>
                    </Box>
                  </Stack>

                  {/* Slider */}
                  <Box>
                    <Typography variant="subtitle2" gutterBottom sx={{ mb: 1 }}>
                      Slider: {sliderValue}%
                    </Typography>
                    <Slider
                      value={sliderValue}
                      onChange={(_, v) => setSliderValue(v as number)}
                    />
                  </Box>

                  {/* Rating */}
                  <Box>
                    <Typography variant="subtitle2" gutterBottom sx={{ mb: 1 }}>
                      Rating
                    </Typography>
                    <Rating
                      value={rating}
                      onChange={(_, v) => setRating(v)}
                      size="large"
                    />
                  </Box>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<Send />}>
                  Submit
                </Button>
                <Button size="small" color="secondary">
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Data Display Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "secondary.main" }}>D</Avatar>}
                title="Data Display"
                subheader="Visual components"
              />
              <CardContent>
                <Stack spacing={4}>
                  {/* Chips */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Chips
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      <Chip label="Primary" color="primary" />
                      <Chip label="Secondary" color="secondary" />
                      <Chip label="Success" color="success" />
                      <Chip label="Error" color="error" />
                      <Chip
                        label="Clickable"
                        color="primary"
                        onClick={() => {}}
                      />
                      <Chip
                        label="Deletable"
                        color="primary"
                        onDelete={() => {}}
                      />
                      <Chip
                        avatar={<Avatar>M</Avatar>}
                        label="With Avatar"
                        color="primary"
                        variant="outlined"
                      />
                    </Stack>
                  </Box>

                  {/* Avatars */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Avatars & Badges
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <AvatarGroup max={4}>
                        <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>B</Avatar>
                        <Avatar sx={{ bgcolor: "success.main" }}>C</Avatar>
                        <Avatar sx={{ bgcolor: "error.main" }}>D</Avatar>
                        <Avatar sx={{ bgcolor: "warning.main" }}>E</Avatar>
                      </AvatarGroup>
                      <Badge badgeContent={4} color="primary">
                        <Mail color="action" />
                      </Badge>
                      <Badge badgeContent={99} color="secondary">
                        <Notifications color="action" />
                      </Badge>
                      <Badge variant="dot" color="primary">
                        <ShoppingCart color="action" />
                      </Badge>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* Progress */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Progress Indicators
                    </Typography>
                    <Stack spacing={2}>
                      <LinearProgress variant="determinate" value={75} />
                      <Stack direction="row" spacing={3} alignItems="center">
                        <CircularProgress size={40} />
                        <CircularProgress color="secondary" size={40} />
                        <CircularProgress
                          variant="determinate"
                          value={65}
                          size={40}
                        />
                      </Stack>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* Tooltips */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      Tooltips
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Tooltip title="I love pink!">
                        <Button variant="outlined" startIcon={<Favorite />}>
                          Hover me
                        </Button>
                      </Tooltip>
                      <Tooltip title="Search for something" arrow>
                        <IconButton color="primary">
                          <Search />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Stack spacing={2.5} sx={{ mt: 5 }}>
              <Alert severity="success" icon={<Check />}>
                <AlertTitle>Success</AlertTitle>
                Your changes have been saved!
              </Alert>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                This is an informational message.
              </Alert>
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Please review before continuing.
              </Alert>
              <Alert severity="error" icon={<Close />}>
                <AlertTitle>Error</AlertTitle>
                Something went wrong!
              </Alert>
            </Stack>
          </Grid>

          {/* Contact Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <Person />
                  </Avatar>
                }
                title="Max Mustermann"
                subheader="UI/UX Designer"
              />
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Mail color="primary" />
                    <Link href="#">max@example.com</Link>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Phone color="primary" />
                    <Typography>+49 123 456 789</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn color="primary" />
                    <Typography>Berlin, Germany</Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Contact
                </Button>
                <Button size="small" variant="outlined">
                  Portfolio
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Stats Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom fontWeight={700}>
                  🚀 Ready to Vibe?
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Diese UI-Library macht deine Projekte lebendig mit einem
                  knalligen Pink als Akzentfarbe!
                </Typography>
                <Stack direction="row" spacing={4}>
                  <Box>
                    <Typography variant="h3" fontWeight={700}>
                      50+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Components
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={700}>
                      2
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Themes
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={700}>
                      ∞
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Possibilities
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => setSnackbarOpen(true)}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ textAlign: "center", mt: 6, py: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Made with{" "}
            <Favorite
              sx={{
                fontSize: 16,
                color: "primary.main",
                verticalAlign: "text-bottom",
              }}
            />{" "}
            using Vibe UI Library
          </Typography>
        </Box>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Welcome to Vibe UI! 🎉"
      />
    </Box>
  );
}

function App() {
  return (
    <VibeUIProvider defaultMode="light">
      <DemoContent />
    </VibeUIProvider>
  );
}

export default App;
