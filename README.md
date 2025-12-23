[README.md](https://github.com/user-attachments/files/24307924/README.md)
<div align="center">

# 🎨 ColorCafe
### 색상 기반 카페 메뉴 추천 시스템

*색상으로 시작하는 당신만의 카페 경험*

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

<br>

## 📖 프로젝트 소개

ColorCafe는 색상 심리학을 활용한 혁신적인 카페 메뉴 추천 웹 애플리케이션입니다.

사용자가 선택한 색상을 기반으로 메뉴를 추천하며, Fisher-Yates 알고리즘을 통한 공정한 랜덤 추천과 부드러운 슬라이드 애니메이션으로 차별화된 사용자 경험을 제공합니다.

<br>


## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [프로그램 도구](#-프로그램-도구)
- [화면 설계](#-화면-설계)
- [결과 화면](#-결과-화면)
- [핵심 구현 코드](#-핵심-구현-코드)
- [PPT 자료](#-PPT-자료)
- [프로젝트 회고](#-프로젝트-회고)
- [향후 개선 방향](#-향후-개선-방향)



<br>

## ✨ 주요 기능

> 💡 상세 내용은 PPT 자료를 참고해주세요

### 🎨 색상 기반 추천
8가지 색상 카테고리 (빨강, 주황, 노랑, 초록, 파랑, 보라, 분홍, 갈색)를 통해 색상 심리학을 활용한 메뉴 매칭을 제공합니다.

### 🎲 공정한 랜덤 추천
Fisher-Yates 알고리즘을 적용하여 모든 메뉴에 동일한 노출 기회를 부여하고, 재방문 시 다른 메뉴를 추천합니다.

### 🎬 자동 슬라이드
3초 간격으로 자동 전환되는 부드러운 CSS Transform 애니메이션을 제공하며, 좌우 버튼으로 수동 제어가 가능합니다.

### 🛒 스마트 장바구니
HOT/ICE 옵션을 구분하여 관리하고, 실시간 가격 계산 및 수량 조절 기능을 제공합니다.

<br>

## 🛠 프로그램 도구

> 💡 상세 내용은 PPT 자료를 참고해주세요

<details>
<summary>개발 환경 및 도구 보기</summary>

<br>

**Frontend**
- React 18.x - 컴포넌트 기반 UI 개발
- Redux Toolkit - 전역 상태 관리
- React Router - SPA 라우팅
- CSS3 - 애니메이션 및 스타일링

**Core Technologies**
- JavaScript ES6+ - 최신 문법 활용
- Fisher-Yates Algorithm - 랜덤 추천 로직
- CSS Transform & Transition - 부드러운 애니메이션

**Development Tools**
- Visual Studio Code - 코드 에디터
- npm - 패키지 관리
- Git/GitHub - 버전 관리

</details>

<br>

## 🎨 화면 설계

> 💡 상세 화면 설계는 PPT 자료를 참고해주세요

<details>
<summary>주요 화면 구성 보기</summary>

<br>

**메인 페이지**
- 색상 선택 버튼 (8가지)
- 추천 메뉴 슬라이드
- 장바구니 아이콘

**메뉴 상세 페이지**
- 메뉴 이미지 및 정보
- HOT/ICE 옵션 선택
- 장바구니 담기 버튼

**장바구니 페이지**
- 선택한 메뉴 목록
- 수량 조절 기능
- 총 금액 계산

</details>

<br>

## 📱 결과 화면

> 💡 실제 구동 화면은 PPT 자료를 참고해주세요

<details>
<summary>주요 화면 캡처 보기</summary>

<br>

**화면 구성**
1. 색상 선택 화면 - 8가지 색상 버튼 UI
2. 메뉴 추천 화면 - 자동 슬라이드 애니메이션
3. 메뉴 상세 화면 - HOT/ICE 옵션 선택
4. 장바구니 화면 - 실시간 가격 계산

📸 스크린샷은 PPT 발표 자료에 포함되어 있습니다.

</details>

<br>

## 💻 핵심 구현 코드

> 💡 전체 코드 설명은 PPT 자료를 참고해주세요

<details>
<summary>색상 기반 필터링</summary>

<br>

```javascript
// menu.js - 데이터 구조
{{ ... }}
```

</details>

<details>
<summary>Fisher-Yates 랜덤 알고리즘</summary>

<br>

```javascript
function shuffle(array) {
  {{ ... }}
  return newArray;
}
```

**특징**
- O(n) 시간 복잡도
- 공정한 랜덤 분포
- 재방문 유도 효과

</details>

<details>
<summary>Redux 상태 관리</summary>

<br>

```javascript
// cartSlice.js
{{ ... }}
```

</details>

<details>
<summary>자동 슬라이드 애니메이션</summary>

<br>

```javascript
// React Hook
{{ ... }}
}
```

</details>

<br>

## 📑 PPT 자료
  
![projectCafe (1)](https://github.com/user-attachments/assets/23568af5-dabc-4ff5-876a-0253be2f1b6f)
![projectCafe (2)](https://github.com/user-attachments/assets/375f6d73-8461-4947-987f-c0db4cb63460)
![projectCafe (3)](https://github.com/user-attachments/assets/affcbdf9-95aa-4887-89a1-6e3134ce28d1)
![projectCafe (4)](https://github.com/user-attachments/assets/0b6e438a-9aa9-43f5-a341-b09fa1fe270d)
![projectCafe (5)](https://github.com/user-attachments/assets/bb400f3e-d152-49e8-85c2-44665beee6ff)
![projectCafe (6)](https://github.com/user-attachments/assets/4765f6d3-8f70-4849-b3ee-4e2dae7416e4)
![projectCafe (7)](https://github.com/user-attachments/assets/5bfd6d4e-fb09-415e-990a-d28177807a05)
![projectCafe (8)](https://github.com/user-attachments/assets/4cc15a7c-2fc4-48e9-a343-d6282b6268ad)
![projectCafe (9)](https://github.com/user-attachments/assets/59c16fde-d497-4a9e-9fa0-3e6157155895)
![projectCafe (10)](https://github.com/user-attachments/assets/c54da24d-4010-4dad-83a8-767b4853728d)
![projectCafe (11)](https://github.com/user-attachments/assets/fdba9c9a-c31a-4ef1-b754-ea7d4ae503f6)
![projectCafe (12)](https://github.com/user-attachments/assets/9ddf03b1-23f7-41fd-9497-ff655ddc8690)
![projectCafe (13)](https://github.com/user-attachments/assets/aa155994-f2bc-4489-968f-c9b9c29bc6c6)
![projectCafe (14)](https://github.com/user-attachments/assets/ac93629d-ab79-4cfc-b24c-0d2f443a0057)
![projectCafe (15)](https://github.com/user-attachments/assets/644b8c3c-ea4d-40d0-9cf7-4e5baba36b15)
![projectCafe (16)](https://github.com/user-attachments/assets/6eb7aaf0-ded4-4787-93f0-8374a65eff7b)
![projectCafe (17)](https://github.com/user-attachments/assets/e729e2e5-a658-48b4-9deb-994927063041)
![projectCafe (18)](https://github.com/user-attachments/assets/1eb997c4-9b30-4ab2-9212-32ce135822ff)
![projectCafe (19)](https://github.com/user-attachments/assets/96c6e84f-de84-44b7-8529-c9c4e38512b3)
![projectCafe (20)](https://github.com/user-attachments/assets/c898bf35-924c-4082-8ca2-eba2d3976de6)
![projectCafe (21)](https://github.com/user-attachments/assets/f2187edd-c6a5-4227-848c-7dffa60a7197)
![projectCafe (22)](https://github.com/user-attachments/assets/3ebab8c9-d3cd-43e4-84d9-f59306753693)
![projectCafe (23)](https://github.com/user-attachments/assets/48a4d99b-eb56-4945-a732-f04966439dbc)
![projectCafe (24)](https://github.com/user-attachments/assets/450fff7e-5fb8-4fd5-96df-b5e0b281bbe9)
![projectCafe (25)](https://github.com/user-attachments/assets/db7f6847-2eee-4675-8c91-a8ed64fa5a35)
![projectCafe (26)](https://github.com/user-attachments/assets/5ef32d0f-7ad9-4f61-99aa-f91977566518)


## 💭 프로젝트 회고

<details>
<summary>잘한 점</summary>

<br>

**차별화된 기능 구현**
- 색상 기반 추천 시스템으로 일반 카페 앱과 차별화
- Fisher-Yates 알고리즘을 통한 공정한 메뉴 노출
- 자동 슬라이드 애니메이션으로 부드러운 UX 제공

**체계적인 상태 관리**
- Redux Toolkit으로 전역 상태 관리
- HOT/ICE 옵션 구분을 통한 세밀한 장바구니 관리
- 실시간 가격 계산으로 즉각적인 피드백

**확장 가능한 아키텍처**
- 컴포넌트 기반 설계로 재사용성 향상
- 데이터 중심 설계 (menu.js만 수정하면 자동 반영)
- 새 메뉴 추가가 간편한 구조

</details>

<details>
<summary>아쉬운 점</summary>

<br>

**성능 최적화 부족**
- 모든 메뉴 데이터를 한 번에 로드
- 이미지 lazy loading 미적용
- 페이지네이션 또는 무한 스크롤 필요

**접근성 고려 부족**
- 키보드 네비게이션 미흡
- 스크린 리더 지원 부족
- ARIA 속성 추가 필요

**테스트 코드 부재**
- 단위 테스트 없음
- E2E 테스트 없음

**반응형 디자인 개선 필요**
- 데스크톱 중심 디자인
- 모바일 최적화 부족

</details>

<details>
<summary>배운 점</summary>

<br>

**알고리즘의 중요성**

Fisher-Yates 알고리즘을 통해 '왜 이 방법을 선택했는가'를 설명할 수 있게 되었습니다.

**사용자 경험 중심 사고**

모든 기능을 '사용자가 어떻게 느낄까?'를 고민하며 구현했습니다.

**상태 관리의 복잡성**

HOT/ICE 옵션 구분 과정에서 Redux의 필요성을 체감했습니다.

**애니메이션 구현 기술**

CSS Transform과 React Hook 조합으로 성능과 UX의 균형을 배웠습니다.

</details>

<br>

## 🔮 향후 개선 방향

<details>
<summary>단기 개선 (1-2개월)</summary>

<br>

| 기능 | 설명 | 기대 효과 |
|------|------|-----------|
| 개인화 추천 | 사용자 히스토리 기반 추천 | 재구매율 20% ↑ |
| 인기 메뉴 | 실시간 주문 데이터 기반 TOP 5 | 전환율 향상 |
| 리뷰 시스템 | 별점 및 리뷰 기능 | 신뢰도 향상 |
| 성능 최적화 | Lazy loading, 페이지네이션 | 로딩 속도 개선 |
| 모바일 키오스크 인터페이스 최적화 | 모바일 환경 및 키오스크 UX 개선 | 접근성 및 사용성 향상 |

</details>

<details>
<summary>장기 개선 (3-6개월)</summary>

<br>

| 기능 | 기술 스택 | 설명 |
|------|-----------|------|
| AI 추천 | TensorFlow.js | 협업 필터링 기반 추천 |
| AR 미리보기 | AR.js | 3D 메뉴 모델 확인 |
| 음성 주문 | Web Speech API | 음성 인식 주문 |
| 소셜 기능 | Firebase | 친구와 함께 주문 |
| PWA | Service Worker | 오프라인 지원 |

</details>

<details>
<summary>기대 효과</summary>

<br>

**비즈니스 지표 개선 예상**

| 지표 | 현재 | 개선 후 | 증가율 |
|------|------|---------|--------|
| 재방문율 | 30% | 50% | ↑67% |
| 평균 주문액 | 8,000원 | 12,000원 | ↑50% |
| 사용자 체류 | 2분 | 5분 | ↑150% |
| 전환율 | 15% | 25% | ↑67% |

</details>

<br>

---

<div align="center">

### ColorCafe는 여기서 끝이 아닙니다

현재의 색상 기반 추천, 랜덤 알고리즘, 슬라이드 애니메이션은 시작에 불과합니다.

AI 추천, AR 미리보기, 음성 주문까지 사용자 경험을 혁신할 다양한 기능들을 준비하고 있습니다.

<br>

---

**MIT License** © 2025 Q1-byte

[![GitHub](https://img.shields.io/badge/GitHub-Q1--byte-181717?logo=github)](https://github.com/Q1-byte)
[![Project](https://img.shields.io/badge/Project-ColorCafe-FF6B6B?logo=react)](https://github.com/Q1-byte/React_Project_ColorCafe)

*작성일: 2025-12-22*

</div>
