export const TOKENS = {
  light: {
    color: {
      bg: { primary: "#f4f2ee", secondary: "#ebe8e0", elevated: "#ffffff", overlay: "rgba(0,0,0,0.35)" },
      surface: { default: "#ffffff", hover: "#f0ede6", active: "#e4e0d6" },
      text: { primary: "#1a1a1a", secondary: "#5a5a5a", tertiary: "#8a8a8a", inverse: "#ffffff" },
      brand: { primary: "#2d6a4f", hover: "#245a42", active: "#1b4633", subtle: "#d8eee5" },
      accent: { primary: "#e76f51", hover: "#d4623f", active: "#b85233" },
      border: { default: "#d4d0c8", strong: "#a8a49c", focus: "#2d6a4f" },
      error: { default: "#dc3545", subtle: "#fce4e7" },
      success: { default: "#28a745", subtle: "#e2f5e8" },
      warning: { default: "#ffc107", subtle: "#fff3cd" },
    },
    shadow: {
      sm: "0 1px 2px rgba(0,0,0,0.06)",
      md: "0 2px 8px rgba(0,0,0,0.08)",
      lg: "0 4px 16px rgba(0,0,0,0.1)",
      xl: "0 8px 32px rgba(0,0,0,0.12)",
    },
  },
  dark: {
    color: {
      bg: { primary: "#121210", secondary: "#1a1a18", elevated: "#222220", overlay: "rgba(0,0,0,0.5)" },
      surface: { default: "#1e1e1c", hover: "#26262a", active: "#2e2e32" },
      text: { primary: "#f0ece4", secondary: "#a89f94", tertiary: "#6b6560", inverse: "#121210" },
      brand: { primary: "#4da88a", hover: "#5bb89a", active: "#6cc4a8", subtle: "#1a3329" },
      accent: { primary: "#e8845e", hover: "#f09070", active: "#f5a088" },
      border: { default: "#3a3a38", strong: "#555550", focus: "#4da88a" },
      error: { default: "#f06060", subtle: "#2d1a1a" },
      success: { default: "#50c878", subtle: "#1a2d1e" },
      warning: { default: "#f0c840", subtle: "#2d2a1a" },
    },
    shadow: {
      sm: "0 1px 2px rgba(0,0,0,0.25)",
      md: "0 2px 8px rgba(0,0,0,0.3)",
      lg: "0 4px 16px rgba(0,0,0,0.35)",
      xl: "0 8px 32px rgba(0,0,0,0.4)",
    },
  },
};

export const SPACING = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, "2xl": 48, "3xl": 64 };
export const RADIUS = { none: 0, sm: 4, md: 8, lg: 12, xl: 16, full: 9999 };
export const FONT = {
  family: { display: "'Playfair Display', Georgia, serif", body: "'DM Sans', system-ui, sans-serif", mono: "'JetBrains Mono', monospace" },
  size: { xs: 11, sm: 13, base: 15, md: 16, lg: 18, xl: 22, "2xl": 28, "3xl": 36, "4xl": 48 },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  leading: { tight: 1.2, snug: 1.4, normal: 1.6 },
};