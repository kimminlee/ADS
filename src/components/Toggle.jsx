import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function Toggle({ checked = false, onChange, label }) {
  const { tokens: t } = useTheme();
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    setIsOn(!isOn);
    onChange?.(!isOn);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={handleToggle}>
      <div style={{
        width: 44, height: 24, borderRadius: 12, position: "relative",
        background: isOn ? t.color.brand.primary : t.color.border.strong,
        transition: "background 0.2s ease"
      }}>
        <div style={{
          width: 18, height: 18, borderRadius: "50%", background: "#ffffff",
          position: "absolute", top: 3, left: isOn ? 23 : 3,
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
        }} />
      </div>
      {label && <span style={{ color: t.color.text.primary, fontSize: 14 }}>{label}</span>}
    </div>
  );
}