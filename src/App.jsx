import { ThemeProvider } from "./contexts/ThemeContext";
import StorybookShell from "./pages/StorybookShell";

function App() {
  return (
    <ThemeProvider>
      {/* 전역 스타일 초기화 */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
      `}</style>
      
      <StorybookShell />
    </ThemeProvider>
  );
}

export default App;