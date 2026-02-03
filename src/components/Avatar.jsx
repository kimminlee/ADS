import { useTheme } from "../contexts/ThemeContext";

export function Avatar({ src, alt = "사용자", size = 40 }) {
  const { tokens: t } = useTheme();
  
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", overflow: "hidden",
      background: t.color.surface.hover, border: `2px solid ${t.color.bg.primary}`,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ color: t.color.text.tertiary, fontSize: size * 0.4 }}>{alt[0]}</span>
      )}
    </div>
  );
}