import { createContext, useContext, useState } from "react";
import { TOKENS } from "../constants/tokens.js";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const tokens = TOKENS[mode];

  return (
    <ThemeContext.Provider value={{ mode, setMode, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);