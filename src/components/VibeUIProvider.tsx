import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { vibeTheme } from "../theme";

export interface VibeUIProviderProps {
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
export const VibeUIProvider: React.FC<VibeUIProviderProps> = ({ children }) => {
  return <ThemeProvider value={vibeTheme}>{children}</ThemeProvider>;
};
