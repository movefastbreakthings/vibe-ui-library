import React, { ReactNode } from "react";
type ThemeMode = "light" | "dark";
interface VibeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
    setMode: (mode: ThemeMode) => void;
}
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
export declare const VibeUIProvider: React.FC<VibeUIProviderProps>;
/**
 * Hook zum Zugriff auf den Vibe Theme Context
 */
export declare const useVibeTheme: () => VibeContextType;
export default VibeUIProvider;
