# ADS (Atomic Design System)

> **Scalable UI Architecture** > 디자인 토큰(SSOT) 기반의 테마 시스템과 자체 문서화 플랫폼(Custom Docs)을 갖춘 리액트 컴포넌트 라이브러리

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Design Tokens](https://img.shields.io/badge/Design_Tokens-SSOT-FF4785?style=for-the-badge)
![Atomic Design](https://img.shields.io/badge/Atomic_Design-Methodology-blue)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📖 Project Overview

이 프로젝트는 확장 가능한 UI 시스템을 구축하기 위한 아키텍처 연구 결과물입니다.
단순히 컴포넌트를 나열하는 방식을 넘어, **Design Tokens**를 단일 진실 공급원(Single Source of Truth)으로 정의하고, 이를 기반으로 **Light/Dark 모드가 완벽하게 동기화되는 테마 엔진**을 구현했습니다. 또한, 외부 라이브러리(Storybook)에 의존하지 않고 자체적인 컴포넌트 문서화 셸(StorybookShell)을 직접 개발하여 시스템의 자립성을 증명했습니다.

## 🔑 Key Technical Features

### 1. SSOT Based Design Tokens (`src/constants/tokens.js`)
디자인의 모든 시각적 요소(색상, 간격, 폰트, 반경)를 의미론적(Semantic) 변수로 추상화하여 관리합니다.
- **Structured Theming:** `light`와 `dark` 객체의 키 구조를 1:1로 매핑하여 테마 전환 시 레이아웃 깨짐 없는(Seamless) 경험을 제공합니다.
- **Semantic Naming:** `#2d6a4f` 대신 `brand.primary`, `surface.hover` 등의 이름을 사용하여 개발자와 디자이너 간의 커뮤니케이션 비용을 줄였습니다.

### 2. Custom Documentation Platform (`src/pages/StorybookShell.jsx`)
무거운 외부 라이브러리 없이, 시스템 내부에서 컴포넌트를 테스트하고 문서화할 수 있는 **Interactive Shell**을 직접 구현했습니다.
- **Dynamic Preview:** 사이드바 메뉴를 통해 컴포넌트별(Button, Input, Badge 등) 변형(Variant) 상태를 즉시 확인할 수 있습니다.
- **Global Theme Toggle:** 문서화 페이지 자체도 `ThemeContext`를 구독하여 실시간 다크 모드 테스트가 가능합니다.

### 3. Flexible Context Architecture (`src/contexts/ThemeContext.jsx`)
`Context API`와 커스텀 훅(`useTheme`)을 활용하여 런타임에 스타일 값을 주입하는 구조입니다.
- **Runtime Injection:** CSS 클래스 교체 방식이 아닌, JavaScript 객체(`tokens`)를 직접 주입하여 로직 레벨에서 동적 스타일링이 가능합니다.

## 📂 System Architecture

```bash
src/
├── components/          # [Atoms & Molecules] 재사용 가능한 UI 컴포넌트
│   ├── Button.jsx       # Variant 패턴이 적용된 버튼
│   ├── Input.jsx        # 상태(Error, Success) 처리가 포함된 입력창
│   └── ...
├── constants/
│   └── tokens.js        # [SSOT] 디자인 시스템의 모든 스타일 변수 정의
├── contexts/
│   └── ThemeContext.jsx # [Engine] 토큰을 전역으로 공급하는 Context Provider
├── pages/
│   └── StorybookShell.jsx # [Docs] 직접 구현한 컴포넌트 문서화 플랫폼
└── App.jsx              # 애플리케이션 진입점
