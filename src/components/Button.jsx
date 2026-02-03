import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FONT, RADIUS } from "../constants/tokens";

const BUTTON_VARIANTS = (t) => ({
  primary: { bg: t.color.brand.primary, text: t.color.text.inverse, border: "transparent", hoverBg: t.color.brand.hover, activeBg: t.color.brand.active },
  secondary: { bg: t.color.surface.default, text: t.color.brand.primary, border: t.color.border.default, hoverBg: t.color.surface.hover, activeBg: t.color.surface.active },
  ghost: { bg: "transparent", text: t.color.text.primary, border: "transparent", hoverBg: t.color.surface.hover, activeBg: t.color.surface.active },
  danger: { bg: t.color.error.default, text: t.color.text.inverse, border: "transparent", hoverBg: "#c02d3a", activeBg: "#a02530" },
});

const BUTTON_SIZES = { 
  sm: { height: 34, px: 14, fontSize: FONT.size.sm }, 
  md: { height: 40, px: 20, fontSize: FONT.size.base }, 
  lg: { height: 48, px: 28, fontSize: FONT.size.md } 
};

export function Button({ variant = "primary", size = "md", children, disabled = false, onClick, icon }) {
  const { tokens: t } = useTheme();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  const v = BUTTON_VARIANTS(t)[variant];
  const s = BUTTON_SIZES[size];
  const bg = active ? v.activeBg : hover ? v.hoverBg : v.bg;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center",
        height: s.height, paddingLeft: s.px, paddingRight: s.px,
        background: disabled ? t.color.surface.hover : bg,
        color: disabled ? t.color.text.tertiary : v.text,
        border: `1.5px solid ${disabled ? "transparent" : v.border}`,
        borderRadius: RADIUS.md,
        fontSize: s.fontSize, fontWeight: FONT.weight.semibold,
        fontFamily: FONT.family.body,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.15s ease",
        opacity: disabled ? 0.5 : 1,
        outline: "none",
      }}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {children}
    </button>
  );
}