import { useTheme } from "../contexts/ThemeContext";
import { RADIUS } from "../constants/tokens";

export function Checkbox({ checked, onChange, label }) {
  const { tokens: t } = useTheme();

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ display: "none" }}
      />
      <div style={{
        width: 20, height: 20, borderRadius: RADIUS.sm,
        border: `2px solid ${checked ? t.color.brand.primary : t.color.border.strong}`,
        background: checked ? t.color.brand.primary : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.15s ease"
      }}>
        {checked && <span style={{ color: "#fff", fontSize: 14 }}>✓</span>}
      </div>
      {label && <span style={{ color: t.color.text.primary, fontSize: 15 }}>{label}</span>}
    </label>
  );
}