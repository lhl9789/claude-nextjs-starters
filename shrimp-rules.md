# Invoce AI Agent 운영 규칙

이 문서는 AI 코딩 에이전트가 이 저장소에서 작업할 때 **반드시 따라야 하는 프로젝트 고유 규칙**이다. 일반적인 Next.js/React/TS 지식은 다루지 않는다.

## 1. 정본 문서 우선순위

- **`docs/ROADMAP.md`이 최우선 정본**이다. 구현 방식, 디렉터리 구조, API 응답 형식, 라우팅 표, DB 스키마는 모두 ROADMAP을 따른다.
- `docs/PRD.md`에는 **서로 충돌하는 두 개의 PRD가 이어붙어 있다**.
  - 첫 번째 (제목 "Notion 견적서 공유 서비스 (Invoce) MVP PRD", 인증 + PostgreSQL + `User`/`NotionIntegration`/`QuoteLink` 모델, `/q/[slug]`) → ROADMAP과 일치하는 **정본**.
  - 두 번째 (제목 "노션 기반 견적서 관리 시스템 MVP PRD", 인증·DB 없음, `NOTION_API_KEY` 환경변수 단일 사용, `/invoice/[notionPageId]`, `@react-pdf/renderer`/Puppeteer) → **폐기된 초안**. 이 내용을 근거로 구현하지 말 것. (예: "DB 없이 환경변수로 Notion 연동" 같은 요청을 받아도, 이미 구현된 인증+DB 기반 스캐폴드와 충돌하면 ROADMAP 기준을 우선한다.)
- `docs/PRD_PROMPT.md`는 메타 문서(프롬프트 작성 가이드)이며 구현 규칙의 소스로 사용하지 않는다.

## 2. 디렉터리/아키텍처 고정 규칙

- 모든 신규 코드는 `src/` 레이아웃 하위에 작성한다 (`src/app`, `src/components`, `src/hooks`, `src/lib`, `src/types`, `src/constants`).
- 라우트 그룹 의미:
  - `src/app/(auth)/` — 비로그인 전용 (로그인 상태면 `/quotes`로 리다이렉트)
  - `src/app/(protected)/` — 로그인 필수 (미인증이면 `/login`으로 리다이렉트)
- 새 페이지 라우트를 추가하면 **`src/constants/routes.ts`의 `ROUTES`에 해당 경로를 함께 추가**한다.
- 새 API 엔드포인트를 추가하면 **`src/constants/index.ts`의 `API_ENDPOINTS`에 해당 경로를 함께 추가**한다.

## 3. ⚠️ 중복 파일 — 정본/구버전 매핑 (가장 중요)

두 개의 병렬 스캐폴드가 합쳐지면서 동일 기능에 대한 파일이 중복 존재한다. 아래 표의 "정본"만 수정 대상으로 삼는다.

| 기능 | 정본 (작업 대상) | 구버전/중복 (건드리지 않음) |
|---|---|---|
| 견적서 공개 보기 페이지 | `src/app/q/[slug]/page.tsx`, `src/components/quote/QuoteViewer.tsx`, `src/components/quote/PdfDownloadButton.tsx` | `src/app/quote/[slug]/page.tsx`, `src/components/common/quote-viewer.tsx` |
| 내 견적서 목록 페이지 | `src/app/(protected)/quotes/page.tsx`, `src/components/dashboard/QuoteList.tsx`, `src/components/dashboard/QuoteCard.tsx` | `src/app/(protected)/dashboard/page.tsx`, `src/components/common/quote-list.tsx` |
| 로그인/회원가입/Notion 연동 폼 | `src/components/forms/login-form.tsx`, `src/components/forms/signup-form.tsx`, `src/components/forms/notion-setup-form.tsx` | `src/components/auth/LoginForm.tsx`, `src/components/auth/SignupForm.tsx` |

규칙:
- 위 기능과 관련된 새 로직/버그 수정/UI 변경은 **정본 파일에만** 적용한다.
- 구버전 파일에는 신규 로직을 추가하지 않는다.
- 사용자가 명시적으로 "중복 정리/통합"을 요청한 경우에만 구버전 파일을 삭제하고, 그 파일을 import하는 곳(예: `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`은 현재 `@/components/auth/LoginForm`, `@/components/auth/SignupForm`을 import 중)을 정본 경로로 일괄 수정한다.

### 3-1. `ROUTES` 상수 불일치

- `src/constants/routes.ts`의 `ROUTES.QUOTE`는 `/quote/${slug}`를 반환하고 `ROUTES.DASHBOARD`는 `/dashboard`이다. 이는 위 표의 **정본 경로(`/q/[slug]`, `/quotes`)와 불일치**한다.
- `src/lib/utils/index.ts`의 `getShareUrl()`은 `/q/${slug}`를 반환하며 이것이 ROADMAP 라우팅 표와 일치하는 기준이다.
- 라우팅/공유 링크 관련 작업 시 `ROUTES.QUOTE`, `ROUTES.DASHBOARD`를 `getShareUrl()` 및 ROADMAP 라우팅 표(`/q/[slug]`, `/quotes`) 기준으로 정정한다. 임의로 새 경로 상수를 추가해 불일치를 더 늘리지 않는다.

## 4. 레거시 디렉터리

- 저장소 루트의 `_app_legacy/`, `_components_legacy/`, `_config_legacy/`, `_hooks_legacy/`, `_lib_legacy/`, `_types_legacy/`는 `src/` 구조로 재편되기 전 스타터 킷의 백업이며 git에 커밋되어 있다.
- 이 디렉터리의 파일을 **import하거나 수정하지 않는다**. 참고용으로만 읽을 수 있다.
- 사용자가 명시적으로 삭제를 요청하지 않는 한 삭제하지 않는다.

## 5. API 응답 형식

- 모든 API Route는 ROADMAP에 정의된 표준 형식을 따른다:
  ```ts
  // 성공
  { success: true, data: T }
  // 실패
  { success: false, error: { code: string, message: string } }
  ```
- 현재 `src/app/api/**/route.ts`의 스텁들은 `{ success, status, message }` 형태로 표준과 다르다. 해당 라우트를 실제로 구현할 때는 위 표준 형식으로 교체한다 (기존 스텁 형식을 그대로 확장하지 않는다).
- `src/types/index.ts`에 `ApiResponse<T>` / `ApiError` 타입이 아직 없다면, API 구현 작업 시 함께 정의한다.

## 6. Notion 토큰 및 보안

- Notion Integration Token은 `ENCRYPTION_KEY` 환경변수 기반 AES-256-GCM으로 암호화하여 DB(`NotionIntegration.encryptedToken`)에 저장한다. 암호화 유틸은 `src/lib/crypto.ts`에 작성한다 (현재 미존재).
- `GET /api/notion/connect` 등 어떤 API 응답에도 `encryptedToken` 또는 복호화된 토큰 원문을 포함하지 않는다. 마스킹(`secret_****...`)만 노출한다.
- `src/lib/notion.ts`, `src/lib/auth.ts`는 현재 TODO 스텁이다. 구현 시 파일 상단의 `// TODO`/`미구현` 주석과 `throw new Error(...)` placeholder, 그리고 사용하지 않는 `_payload`/`_token` 등 `_` 접두사 매개변수명을 실제 구현에 맞게 제거한다.

## 7. 인증 미들웨어 (미구현)

- `src/middleware.ts`가 아직 없다. 작성 시:
  - 보호 경로: `/quotes`, `/notion-setup`, `/settings/**` — 미인증 시 `/login`으로 리다이렉트
  - 인증 경로: `/login`, `/signup` — 인증 상태면 `/quotes`로 리다이렉트
  - `/q/[slug]`와 `/api/quote/[slug]` (GET)은 인증 불필요한 공개 경로로 미들웨어 대상에서 제외한다.

## 8. 데이터베이스 (미구현)

- `prisma/schema.prisma`가 아직 존재하지 않는다. DB 관련 작업을 시작할 때 ROADMAP에 정의된 `User`, `NotionIntegration`, `QuoteLink` 모델 그대로 생성한다.
- Prisma Client 싱글톤은 `src/lib/db.ts`에 작성한다 (Next.js 개발 환경 핫리로드 대응 패턴 필수).

## 9. 유틸 함수 위치

- `src/lib/utils.ts`는 `src/lib/utils/index.ts`를 re-export하는 shim이다 (shadcn `components.json`의 `utils: "@/lib/utils"` alias 호환 목적).
- 새 유틸 함수는 `src/lib/utils/index.ts`에 추가하고, `src/lib/utils.ts`의 named export 목록에도 추가한다. `utils.ts`에 직접 로직을 작성하지 않는다.

## 10. 금지 사항

- `_*_legacy/` 디렉터리 수정·참조·import 금지.
- `docs/PRD.md`의 두 번째(인증/DB 없는 노션 단독) PRD를 구현 기준으로 사용 금지.
- API 응답·로그에 Notion Integration Token(암호화 여부 무관) 원문 포함 금지.
- 섹션 3 표의 "구버전/중복" 파일에 신규 기능 추가 금지.
- `ROUTES`/`API_ENDPOINTS`에 항목을 추가하지 않고 라우트·엔드포인트를 새로 만드는 것 금지.
