import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { vibeTheme, vibeDarkTheme } from "../theme";

type ThemeMode = "light" | "dark";

interface VibeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export interface VibeUIProviderProps {
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
export const VibeUIProvider: React.FC<VibeUIProviderProps> = ({
  children,
  defaultMode = "light",
  disableCssBaseline = false,
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return mode === "light" ? vibeTheme : vibeDarkTheme;
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleMode,
      setMode,
    }),
    [mode]
  );

  return (
    <VibeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {!disableCssBaseline && <CssBaseline />}
        {children}
      </ThemeProvider>
    </VibeContext.Provider>
  );
};

/**
 * Hook zum Zugriff auf den Vibe Theme Context
 */
export const useVibeTheme = (): VibeContextType => {
  const context = useContext(VibeContext);
  if (context === undefined) {
    throw new Error("useVibeTheme must be used within a VibeUIProvider");
  }
  return context;
};

export default VibeUIProvider;
