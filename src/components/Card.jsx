import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { RADIUS, SPACING } from "../constants/tokens";

export function Card({ variant = "default", children, style = {} }) {
  const { tokens: t } = useTheme();
  const [hover, setHover] = useState(false);
  
  const styles = {
    default: { bg: t.color.surface.default, border: "none", shadow: hover ? t.shadow.md : t.shadow.sm },
    elevated: { bg: t.color.bg.elevated, border: "none", shadow: hover ? t.shadow.lg : t.shadow.md },
    outlined: { bg: t.color.surface.default, border: `1.5px solid ${t.color.border.default}`, shadow: "none" },
  };
  const v = styles[variant];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: v.bg, border: v.border, borderRadius: RADIUS.xl,
        boxShadow: v.shadow, padding: SPACING.xl,
        transition: "all 0.2s ease",
        transform: hover && variant !== "outlined" ? "translateY(-2px)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}