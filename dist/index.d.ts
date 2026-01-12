import React from 'react';
export { Accordion, AccordionBody, AccordionHeader, Alert, Avatar, Badge, Breadcrumbs, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Carousel, Checkbox, Chip, Collapse, Dialog, DialogBody, DialogFooter, DialogHeader, Drawer, IconButton, Input, List, ListItem, ListItemPrefix, ListItemSuffix, Menu, MenuHandler, MenuItem, MenuList, MobileNav, Navbar, Option, Popover, PopoverContent, PopoverHandler, Progress, Radio, Rating, Select, Slider, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler, Spinner, Step, Stepper, Switch, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Textarea, ThemeProvider, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Tooltip, Typography } from '@material-tailwind/react';

interface VibeUIProviderProps {
    children: React.ReactNode;
}
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
declare const VibeUIProvider: React.FC<VibeUIProviderProps>;

/**
 * Vibe Theme for Material Tailwind
 * Primary Color: #ff0080 (Vibrant Pink)
 * Secondary Color: #9c27b0 (Electric Purple)
 */
declare const vibeTheme: {
    button: {
        defaultProps: {
            color: string;
            ripple: boolean;
        };
        valid: {
            colors: string[];
        };
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: string;
                        color: string;
                        shadow: string;
                        hover: string;
                        focus: string;
                        active: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                        shadow: string;
                        hover: string;
                        focus: string;
                        active: string;
                    };
                };
                outlined: {
                    pink: {
                        border: string;
                        color: string;
                        hover: string;
                        focus: string;
                        active: string;
                    };
                    purple: {
                        border: string;
                        color: string;
                        hover: string;
                        focus: string;
                        active: string;
                    };
                };
                gradient: {
                    pink: {
                        background: string;
                        color: string;
                        shadow: string;
                        hover: string;
                        active: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                        shadow: string;
                        hover: string;
                        active: string;
                    };
                };
                text: {
                    pink: {
                        color: string;
                        hover: string;
                        active: string;
                    };
                    purple: {
                        color: string;
                        hover: string;
                        active: string;
                    };
                };
            };
        };
    };
    card: {
        defaultProps: {
            variant: string;
            color: string;
            shadow: boolean;
        };
        styles: {
            base: {
                initial: {
                    borderRadius: string;
                };
            };
        };
    };
    input: {
        defaultProps: {
            color: string;
        };
        styles: {
            variants: {
                outlined: {
                    pink: {
                        input: {
                            borderColor: string;
                            borderColorFocused: string;
                        };
                        label: {
                            color: string;
                            after: {
                                borderColor: string;
                            };
                        };
                    };
                };
                standard: {
                    pink: {
                        input: {
                            borderColor: string;
                            borderColorFocused: string;
                        };
                        label: {
                            color: string;
                            after: {
                                borderColor: string;
                            };
                        };
                    };
                };
                static: {
                    pink: {
                        input: {
                            borderColor: string;
                            borderColorFocused: string;
                        };
                        label: {
                            color: string;
                            after: {
                                borderColor: string;
                            };
                        };
                    };
                };
            };
        };
    };
    checkbox: {
        defaultProps: {
            color: string;
        };
        styles: {
            colors: {
                pink: {
                    background: string;
                    border: string;
                    before: string;
                };
                purple: {
                    background: string;
                    border: string;
                    before: string;
                };
            };
        };
    };
    switch: {
        defaultProps: {
            color: string;
        };
        styles: {
            colors: {
                pink: {
                    input: string;
                    circle: string;
                    before: string;
                };
                purple: {
                    input: string;
                    circle: string;
                    before: string;
                };
            };
        };
    };
    radio: {
        defaultProps: {
            color: string;
        };
        styles: {
            colors: {
                pink: {
                    color: string;
                    border: string;
                    before: string;
                };
                purple: {
                    color: string;
                    border: string;
                    before: string;
                };
            };
        };
    };
    chip: {
        defaultProps: {
            color: string;
        };
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
                gradient: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
                outlined: {
                    pink: {
                        border: string;
                        color: string;
                    };
                    purple: {
                        border: string;
                        color: string;
                    };
                };
                ghost: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
            };
        };
    };
    spinner: {
        defaultProps: {
            color: string;
        };
        styles: {
            colors: {
                pink: {
                    color: string;
                };
                purple: {
                    color: string;
                };
            };
        };
    };
    progress: {
        defaultProps: {
            color: string;
        };
        styles: {
            colors: {
                pink: {
                    background: string;
                };
                purple: {
                    background: string;
                };
            };
        };
    };
    tabs: {
        defaultProps: {};
        styles: {
            base: {
                tab: {
                    initial: {
                        color: string;
                    };
                };
                indicator: {
                    bg: string;
                };
            };
        };
    };
    alert: {
        defaultProps: {
            color: string;
        };
        styles: {
            variants: {
                filled: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
                gradient: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
                outlined: {
                    pink: {
                        border: string;
                        color: string;
                    };
                    purple: {
                        border: string;
                        color: string;
                    };
                };
                ghost: {
                    pink: {
                        background: string;
                        color: string;
                    };
                    purple: {
                        background: string;
                        color: string;
                    };
                };
            };
        };
    };
};
declare const vibeColors: {
    readonly primary: "#ff0080";
    readonly secondary: "#9c27b0";
    readonly primaryLight: "#ff6eb4";
    readonly secondaryLight: "#ce93d8";
};

export { VibeUIProvider, vibeColors, vibeTheme };
export type { VibeUIProviderProps };
