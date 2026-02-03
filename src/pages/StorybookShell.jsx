import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx"; // .jsx 추가
import { FONT, SPACING, RADIUS } from "../constants/tokens.js"; // .js 추가

// 컴포넌트들도 모두 뒤에 .jsx를 붙여주세요
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import { Badge } from "../components/Badge.jsx";
import { Card } from "../components/Card.jsx";
import { Toggle } from "../components/Toggle.jsx";
import { Avatar } from "../components/Avatar.jsx";
import { Checkbox } from "../components/Checkbox.jsx";

const MENU_ITEMS = [
  // { id: "overview", label: "개요", icon: "🍉" },
  { id: "button", label: "버튼", icon: "🍋" },
  { id: "input", label: "입력창", icon: "🍊" },
  { id: "badge", label: "배지", icon: "🍋‍🟩" },
  { id: "card", label: "카드", icon: "🍌" },
];

export default function StorybookShell() {
  const { mode, setMode, tokens: t } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ display: "flex", height: "100vh", background: t.color.bg.primary, color: t.color.text.primary, fontFamily: FONT.family.body }}>
      
      {/* 사이드바 */}
      <div style={{ width: 240, background: t.color.surface.default, borderRight: `1px solid ${t.color.border.default}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 24, borderBottom: `1px solid ${t.color.border.default}` }}>
          <div style={{ fontWeight: "bold", fontSize: 18, color: t.color.brand.primary }}>아토믹 시스템</div>
        </div>
        <nav style={{ flex: 1, padding: 16 }}>
          {MENU_ITEMS.map(item => (
            <div 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{ 
                padding: "12px 16px", borderRadius: RADIUS.md, cursor: "pointer", marginBottom: 4,
                background: activeTab === item.id ? t.color.brand.subtle : "transparent",
                color: activeTab === item.id ? t.color.brand.primary : t.color.text.secondary,
                display: "flex", alignItems: "center", gap: 10
              }}
            >
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </nav>
      </div>

      {/* 메인 콘텐츠 */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* 상단바 */}
        <header style={{ height: 64, borderBottom: `1px solid ${t.color.border.default}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", background: t.color.surface.default }}>
          <div style={{ fontWeight: "bold" }}>{MENU_ITEMS.find(i => i.id === activeTab)?.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 12 }}>{mode === "light" ? "라이트 모드" : "다크 모드"}</span>
            <Toggle checked={mode === "dark"} onChange={(val) => setMode(val ? "dark" : "light")} />
          </div>
        </header>

        {/* 캔버스 (내용) */}
        <main style={{ flex: 1, padding: 40, overflowY: "auto" }}>
          {activeTab === "overview" && (
            <div style={{ maxWidth: 600 }}>
              <h1 style={{ fontFamily: FONT.family.display, fontSize: 32, marginBottom: 16 }}>Atomic Design System</h1>
              <p style={{ color: t.color.text.secondary, lineHeight: 1.6 }}>
                이 시스템은 컴포넌트 단위로 쪼개어 관리하는 현대 프론트엔드 방식입니다. 
                왼쪽 메뉴를 눌러 각 컴포넌트의 스타일을 확인해보세요.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                <Badge variant="brand">리액트</Badge>
                <Badge variant="success">표준 아키텍처</Badge>
                <Badge variant="accent">한글화 완료</Badge>
              </div>
            </div>
          )}

          {activeTab === "button" && (
            <Card variant="outlined">
              <h3 style={{ marginBottom: 20 }}>버튼 변형(Variants)</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary">기본 버튼</Button>
                <Button variant="secondary">보조 버튼</Button>
                <Button variant="ghost">고스트 버튼</Button>
                <Button variant="danger">삭제 버튼</Button>
              </div>
            </Card>
          )}

          {activeTab === "input" && (
            <Card variant="outlined" style={{ maxWidth: 400 }}>
              <h3 style={{ marginBottom: 20 }}>입력창 스타일</h3>
              <Input label="이메일 주소" placeholder="example@test.com" helperText="이메일 형식을 확인해주세요." />
              <div style={{ height: 20 }} />
              <Input state="error" label="비밀번호" placeholder="********" helperText="비밀번호가 틀렸습니다." />
            </Card>
          )}

          {activeTab === "badge" && (
            <Card variant="outlined">
              <h3 style={{ marginBottom: 20 }}>상태 배지</h3>
              <div style={{ display: "flex", gap: 8 }}>
                <Badge variant="default">대기중</Badge>
                <Badge variant="success">완료됨</Badge>
                <Badge variant="warning">주의</Badge>
                <Badge variant="error">실패</Badge>
                <Badge variant="brand">진행중</Badge>
              </div>
            </Card>
          )}

          {activeTab === "card" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Card variant="default">
                <h4>기본 카드</h4>
                <p style={{ fontSize: 14, color: t.color.text.secondary }}>가장 기본적인 카드 형태입니다.</p>
              </Card>
              <Card variant="elevated">
                <h4>그림자 카드</h4>
                <p style={{ fontSize: 14, color: t.color.text.secondary }}>입체감이 있는 카드 형태입니다.</p>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}