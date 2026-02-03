import { useTheme } from "../contexts/ThemeContext";
import { FONT, RADIUS, SPACING } from "../constants/tokens";

export function Select({ options = [], label, value, onChange }) {
  const { tokens: t } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{ fontSize: FONT.size.sm, color: t.color.text.secondary }}>
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          height: 40, padding: `0 ${SPACING.md}px`,
          borderRadius: RADIUS.md, border: `1.5px solid ${t.color.border.default}`,
          background: t.color.surface.default, color: t.color.text.primary,
          fontSize: FONT.size.base, outline: "none", cursor: "pointer"
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}