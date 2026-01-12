import { jsx } from 'react/jsx-runtime';
import { ThemeProvider } from '@material-tailwind/react';
export { Accordion, AccordionBody, AccordionHeader, Alert, Avatar, Badge, Breadcrumbs, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Carousel, Checkbox, Chip, Collapse, Dialog, DialogBody, DialogFooter, DialogHeader, Drawer, IconButton, Input, List, ListItem, ListItemPrefix, ListItemSuffix, Menu, MenuHandler, MenuItem, MenuList, MobileNav, Navbar, Option, Popover, PopoverContent, PopoverHandler, Progress, Radio, Rating, Select, Slider, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler, Spinner, Step, Stepper, Switch, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Textarea, ThemeProvider, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Tooltip, Typography } from '@material-tailwind/react';

/**
 * Vibe Theme for Material Tailwind
 * Primary Color: #ff0080 (Vibrant Pink)
 * Secondary Color: #9c27b0 (Electric Purple)
 */
const vibeTheme = {
    button: {
        defaultProps: {
            color: 'pink',
            ripple: true,
        },
        valid: {
            colors: [
                'pink',
                'purple',
                'white',
                'blue-gray',
                'gray',
                'brown',
                'deep-orange',
                'orange',
                'amber',
                'yellow',
                'lime',
                'light-green',
                'green',
                'teal',
                'cyan',
                'light-blue',
                'blue',
                'indigo',
                'deep-purple',
                'red',
            ],
        },
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: 'bg-[#ff0080]',
                        color: 'text-white',
                        shadow: 'shadow-md shadow-pink-500/20',
                        hover: 'hover:shadow-lg hover:shadow-pink-500/40',
                        focus: 'focus:opacity-[0.85] focus:shadow-none',
                        active: 'active:opacity-[0.85] active:shadow-none',
                    },
                    purple: {
                        background: 'bg-[#9c27b0]',
                        color: 'text-white',
                        shadow: 'shadow-md shadow-purple-500/20',
                        hover: 'hover:shadow-lg hover:shadow-purple-500/40',
                        focus: 'focus:opacity-[0.85] focus:shadow-none',
                        active: 'active:opacity-[0.85] active:shadow-none',
                    },
                },
                outlined: {
                    pink: {
                        border: 'border border-[#ff0080]',
                        color: 'text-[#ff0080]',
                        hover: 'hover:opacity-75',
                        focus: 'focus:ring focus:ring-pink-200',
                        active: 'active:opacity-[0.85]',
                    },
                    purple: {
                        border: 'border border-[#9c27b0]',
                        color: 'text-[#9c27b0]',
                        hover: 'hover:opacity-75',
                        focus: 'focus:ring focus:ring-purple-200',
                        active: 'active:opacity-[0.85]',
                    },
                },
                gradient: {
                    pink: {
                        background: 'bg-gradient-to-tr from-[#ff0080] to-[#ff6eb4]',
                        color: 'text-white',
                        shadow: 'shadow-md shadow-pink-500/20',
                        hover: 'hover:shadow-lg hover:shadow-pink-500/40',
                        active: 'active:opacity-[0.85]',
                    },
                    purple: {
                        background: 'bg-gradient-to-tr from-[#9c27b0] to-[#ce93d8]',
                        color: 'text-white',
                        shadow: 'shadow-md shadow-purple-500/20',
                        hover: 'hover:shadow-lg hover:shadow-purple-500/40',
                        active: 'active:opacity-[0.85]',
                    },
                },
                text: {
                    pink: {
                        color: 'text-[#ff0080]',
                        hover: 'hover:bg-pink-500/10',
                        active: 'active:bg-pink-500/30',
                    },
                    purple: {
                        color: 'text-[#9c27b0]',
                        hover: 'hover:bg-purple-500/10',
                        active: 'active:bg-purple-500/30',
                    },
                },
            },
        },
    },
    card: {
        defaultProps: {
            variant: 'filled',
            color: 'white',
            shadow: true,
        },
        styles: {
            base: {
                initial: {
                    borderRadius: 'rounded-xl',
                },
            },
        },
    },
    input: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            variants: {
                outlined: {
                    pink: {
                        input: {
                            borderColor: 'border-blue-gray-200',
                            borderColorFocused: 'focus:border-[#ff0080]',
                        },
                        label: {
                            color: 'text-blue-gray-400 peer-focus:text-[#ff0080]',
                            after: {
                                borderColor: 'after:border-[#ff0080]',
                            },
                        },
                    },
                },
                standard: {
                    pink: {
                        input: {
                            borderColor: 'border-blue-gray-200',
                            borderColorFocused: 'focus:border-[#ff0080]',
                        },
                        label: {
                            color: 'text-blue-gray-500 peer-focus:text-[#ff0080]',
                            after: {
                                borderColor: 'after:border-[#ff0080]',
                            },
                        },
                    },
                },
                static: {
                    pink: {
                        input: {
                            borderColor: 'border-blue-gray-200',
                            borderColorFocused: 'focus:border-[#ff0080]',
                        },
                        label: {
                            color: 'text-blue-gray-500 peer-focus:text-[#ff0080]',
                            after: {
                                borderColor: 'after:border-[#ff0080]',
                            },
                        },
                    },
                },
            },
        },
    },
    checkbox: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            colors: {
                pink: {
                    background: 'checked:bg-[#ff0080]',
                    border: 'checked:border-[#ff0080]',
                    before: 'checked:before:bg-[#ff0080]',
                },
                purple: {
                    background: 'checked:bg-[#9c27b0]',
                    border: 'checked:border-[#9c27b0]',
                    before: 'checked:before:bg-[#9c27b0]',
                },
            },
        },
    },
    switch: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            colors: {
                pink: {
                    input: 'checked:bg-[#ff0080]',
                    circle: 'peer-checked:border-[#ff0080]',
                    before: 'peer-checked:before:bg-[#ff0080]',
                },
                purple: {
                    input: 'checked:bg-[#9c27b0]',
                    circle: 'peer-checked:border-[#9c27b0]',
                    before: 'peer-checked:before:bg-[#9c27b0]',
                },
            },
        },
    },
    radio: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            colors: {
                pink: {
                    color: 'text-[#ff0080]',
                    border: 'checked:border-[#ff0080]',
                    before: 'checked:before:bg-[#ff0080]',
                },
                purple: {
                    color: 'text-[#9c27b0]',
                    border: 'checked:border-[#9c27b0]',
                    before: 'checked:before:bg-[#9c27b0]',
                },
            },
        },
    },
    chip: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: 'bg-[#ff0080]',
                        color: 'text-white',
                    },
                    purple: {
                        background: 'bg-[#9c27b0]',
                        color: 'text-white',
                    },
                },
                gradient: {
                    pink: {
                        background: 'bg-gradient-to-tr from-[#ff0080] to-[#ff6eb4]',
                        color: 'text-white',
                    },
                    purple: {
                        background: 'bg-gradient-to-tr from-[#9c27b0] to-[#ce93d8]',
                        color: 'text-white',
                    },
                },
                outlined: {
                    pink: {
                        border: 'border border-[#ff0080]',
                        color: 'text-[#ff0080]',
                    },
                    purple: {
                        border: 'border border-[#9c27b0]',
                        color: 'text-[#9c27b0]',
                    },
                },
                ghost: {
                    pink: {
                        background: 'bg-[#ff0080]/20',
                        color: 'text-[#ff0080]',
                    },
                    purple: {
                        background: 'bg-[#9c27b0]/20',
                        color: 'text-[#9c27b0]',
                    },
                },
            },
        },
    },
    spinner: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            colors: {
                pink: {
                    color: 'text-[#ff0080]',
                },
                purple: {
                    color: 'text-[#9c27b0]',
                },
            },
        },
    },
    progress: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            colors: {
                pink: {
                    background: 'bg-[#ff0080]',
                },
                purple: {
                    background: 'bg-[#9c27b0]',
                },
            },
        },
    },
    tabs: {
        defaultProps: {},
        styles: {
            base: {
                tab: {
                    initial: {
                        color: 'text-blue-gray-900',
                    },
                },
                indicator: {
                    bg: 'bg-[#ff0080]',
                },
            },
        },
    },
    alert: {
        defaultProps: {
            color: 'pink',
        },
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: 'bg-[#ff0080]',
                        color: 'text-white',
                    },
                    purple: {
                        background: 'bg-[#9c27b0]',
                        color: 'text-white',
                    },
                },
                gradient: {
                    pink: {
                        background: 'bg-gradient-to-tr from-[#ff0080] to-[#ff6eb4]',
                        color: 'text-white',
                    },
                    purple: {
                        background: 'bg-gradient-to-tr from-[#9c27b0] to-[#ce93d8]',
                        color: 'text-white',
                    },
                },
                outlined: {
                    pink: {
                        border: 'border border-[#ff0080]',
                        color: 'text-[#ff0080]',
                    },
                    purple: {
                        border: 'border border-[#9c27b0]',
                        color: 'text-[#9c27b0]',
                    },
                },
                ghost: {
                    pink: {
                        background: 'bg-[#ff0080]/20',
                        color: 'text-[#ff0080]',
                    },
                    purple: {
                        background: 'bg-[#9c27b0]/20',
                        color: 'text-[#9c27b0]',
                    },
                },
            },
        },
    },
};
// Color palette export for documentation
const vibeColors = {
    primary: '#ff0080',
    secondary: '#9c27b0',
    primaryLight: '#ff6eb4',
    secondaryLight: '#ce93d8',
};

/**
 * VibeUIProvider - Wraps your app with the Vibe theme
 *
 * @example
 * ```tsx
 * import { VibeUIProvider } from 'vibe-ui-library';
 *
 * function App() {
 *   return (
 *     <VibeUIProvider>
 *       <YourApp />
 *     </VibeUIProvider>
 *   );
 * }
 * ```
 */
const VibeUIProvider = ({ children }) => {
    return jsx(ThemeProvider, { value: vibeTheme, children: children });
};

export { VibeUIProvider, vibeColors, vibeTheme };
