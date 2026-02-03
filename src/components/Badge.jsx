import { useTheme } from "../contexts/ThemeContext";
import { FONT, RADIUS } from "../constants/tokens";

export function Badge({ variant = "default", size = "md", children }) {
  const { tokens: t } = useTheme();
  const map = {
    default: { bg: t.color.surface.hover, text: t.color.text.secondary },
    brand: { bg: t.color.brand.subtle, text: t.color.brand.primary },
    accent: { bg: t.color.accent.primary + "22", text: t.color.accent.primary },
    success: { bg: t.color.success.subtle, text: t.color.success.default },
    warning: { bg: t.color.warning.subtle, text: t.color.text.primary },
    error: { bg: t.color.error.subtle, text: t.color.error.default },
  };
  const v = map[variant];
  const sizes = { sm: { px: 8, py: 2, fontSize: FONT.size.xs }, md: { px: 12, py: 4, fontSize: FONT.size.sm } };
  const s = sizes[size];

  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: `${s.py}px ${s.px}px`,
      background: v.bg, color: v.text,
      borderRadius: RADIUS.full,
      fontSize: s.fontSize, fontWeight: FONT.weight.semibold,
      fontFamily: FONT.family.body, whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}