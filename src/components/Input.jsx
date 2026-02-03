import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FONT, RADIUS, SPACING } from "../constants/tokens";

export function Input({ variant = "default", size = "md", state = "default", placeholder, label, helperText, value, onChange }) {
  const { tokens: t } = useTheme();
  const [focus, setFocus] = useState(false);
  const [val, setVal] = useState(value || "");
  
  const sizes = { 
    sm: { height: 34, fontSize: FONT.size.sm }, 
    md: { height: 40, fontSize: FONT.size.base }, 
    lg: { height: 48, fontSize: FONT.size.md } 
  };
  const s = sizes[size];
  const isDisabled = state === "disabled";

  const borderColor = focus ? t.color.border.focus : state === "error" ? t.color.error.default : state === "success" ? t.color.success.default : t.color.border.default;
  const baseBg = variant === "filled" ? t.color.surface.hover : variant === "underline" ? "transparent" : t.color.surface.default;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label && (
        <label style={{ fontSize: FONT.size.sm, fontWeight: FONT.weight.medium, color: t.color.text.secondary, fontFamily: FONT.family.body }}>
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={val}
        disabled={isDisabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => { setVal(e.target.value); onChange?.(e); }}
        style={{
          width: "100%", height: s.height,
          padding: variant === "underline" ? `0 0 0 0` : `0 ${SPACING.md}px`,
          fontSize: s.fontSize, fontFamily: FONT.family.body,
          color: isDisabled ? t.color.text.tertiary : t.color.text.primary,
          background: isDisabled ? t.color.surface.hover : baseBg,
          border: variant === "underline" ? "none" : `1.5px solid ${isDisabled ? t.color.border.default : borderColor}`,
          borderBottom: variant === "underline" ? `2px solid ${isDisabled ? t.color.border.default : borderColor}` : undefined,
          borderRadius: variant === "underline" ? 0 : RADIUS.md,
          outline: "none", transition: "all 0.2s ease",
          boxShadow: focus && variant !== "underline" ? `0 0 0 3px ${state === "error" ? t.color.error.subtle : t.color.brand.subtle}` : "none",
          cursor: isDisabled ? "not-allowed" : "text",
          boxSizing: "border-box",
        }}
      />
      {helperText && (
        <span style={{ fontSize: FONT.size.xs, fontFamily: FONT.family.body, color: state === "error" ? t.color.error.default : state === "success" ? t.color.success.default : t.color.text.tertiary }}>
          {helperText}
        </span>
      )}
    </div>
  );
}