# Next.js 통합 가이드

이 가이드는 Next.js에서 Pixel Loader를 사용하는 방법과 다른 프레임워크를 위한 대안들을 설명합니다.

## 개요

Pixel Loader는 모든 JavaScript 프레임워크에서 사용할 수 있는 웹 컴포넌트 라이브러리입니다. 하지만 **Next.js는 React 전용으로 설계**되어 있어, 프레임워크별 통합 가능성이 다릅니다.

## Next.js와의 프레임워크 호환성

| 프레임워크 | Next.js 사용 가능? | 대체 프레임워크 |
|-----------|---------------------|----------------|
| **React** | ✅ 가능 (네이티브) | Next.js (이미 사용 중) |
| **Vue** | ❌ 불가능 | Nuxt.js |
| **Solid** | ❌ 불가능 | Solid Start |
| **Svelte** | ❌ 불가능 | SvelteKit |

## Next.js에서 React 패키지 사용

**@pixel-loader/react** 패키지는 Next.js와 완벽하게 작동합니다. 완전한 작동 예제는 `/examples` 디렉토리를 참고하세요.

```tsx
import { PixelLoader } from "@pixel-loader/react";

export default function Page() {
  return (
    <PixelLoader
      preset="diagonal"
      size={66}
      isAnimating={true}
    />
  );
}
```

**특징:**
- ✅ App Router와 Pages Router 지원
- ✅ Server Components 호환 (인터랙티브할 때 클라이언트 컴포넌트로 사용)
- ✅ TypeScript 지원
- ✅ 모든 props 사용 가능

## 다른 프레임워크가 Next.js에서 작동하지 않는 이유

### 기술적 이유

1. **프레임워크별 가상 DOM**
   - Next.js는 React의 가상 DOM을 사용
   - Vue, Solid, Svelte는 각자의 가상 DOM 구현체를 사용
   - 같은 애플리케이션에서 혼합 불가능

2. **빌드 시스템 차이**
   - Next.js는 자체 빌드 파이프라인 사용 (webpack/turbopack)
   - 각 프레임워크는 특정 컴파일러 요구사항 있음
   - 빌드 산출물이 호환되지 않음

3. **런타임 충돌**
   - 프레임워크 런타임이 함께 로드되면 충돌
   - 다른 조정(reconciliation) 알고리즘
   - 호환되지 않는 컴포넌트 라이프사이클 메서드

## 대안 접근법

### 1. 웹 컴포넌트 직접 사용 (범용)

Pixel Loader는 웹 컴포넌트로 빌드되었으므로 Next.js를 포함한 **모든** 프레임워크에서 사용 가능합니다.

**Next.js에서 (App Router):**

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const loaderRef = useRef<any>(null);

  useEffect(() => {
    // 웹 컴포넌트 임포트
    import("@pixel-loader/core");
  }, []);

  return (
    <pixel-loader
      ref={loaderRef}
      preset="diagonal"
      size={66}
      is-animating="true"
    />
  );
}
```

**제한사항:**
- Client Component여야 함 ("use client")
- Props에 kebab-case 사용 (예: `isAnimating` 대신 `is-animating`)
- Props에 대한 TypeScript 타입 안전성 없음
- 수동 속성 바인딩 필요

### 2. 마이크로 프론트엔드 아키텍처

**Module Federation**이나 **single-spa**를 사용하여 여러 프레임워크 통합:

```javascript
// Next.js 앱이 Vue 앱을 마이크로 프론트엔드로 로드
const VueApp = lazy(() => import("vueApp/App"));

export default function Page() {
  return (
    <div>
      <h1>Next.js 앱</h1>
      <Suspense fallback={<div>Vue 앱 로딩 중...</div>}>
        <VueApp />
      </Suspense>
    </div>
  );
}
```

**도구:**
- [Webpack Module Federation](https://module-federation.io/)
- [single-spa](https://single-spa.js.org/)
- [qiankun](https://qiankun.umijs.org/)

**장점:**
- 같은 페이지에서 여러 프레임워크 실행
- 독립적인 배포
- 프레임워크 격리

**단점:**
- 복잡한 설정
- 번들 크기 증가
- 성능 오버헤드

### 3. iframe 격리

iframe에서 프레임워크별 예제 로드:

```tsx
export default function Page() {
  return (
    <div>
      <h1>Pixel Loader 예제</h1>

      <div className="grid">
        <iframe src="/examples-react" title="React" />
        <iframe src="/examples-vue" title="Vue" />
        <iframe src="/examples-solid" title="Solid" />
        <iframe src="/examples-svelte" title="Svelte" />
      </div>
    </div>
  );
}
```

**장점:**
- 완전한 격리
- 구현 간단
- 프레임워크 충돌 없음

**단점:**
- 사용자 경험 저하 (여러 스크롤바)
- iframe과 부모 간 통신 복잡
- SEO 이슈

### 4. 서버사이드 인클루드 (SSI) / Edge Includes

엣지사이드 인클루드를 사용하여 프레임워크별 컴포넌트 렌더링:

```html
<!-- Next.js 페이지 -->
<html>
  <body>
    <h1>Pixel Loader</h1>
    <!--# include virtual="/vue-loader" -->
    <!--# include virtual="/solid-loader" -->
  </body>
</html>
```

**도구:**
- [Edge Side Includes (ESI)](https://www.w3.org/TR/esi-lang)
- [nginx SSI](https://nginx.org/en/docs/http/ngx_http_ssi_module.html)
- [Cloudflare Workers](https://workers.cloudflare.com/)

**장점:**
- 서버사이드 구성
- 런타임 프레임워크 충돌 없음

**단점:**
- 복잡한 인프라 설정
- 제한된 인터랙티브 기능

## 사용 사례별 추천 접근법

### Next.js 앱에서 Pixel Loader 사용하고 싶어요

**해결책:** `@pixel-loader/react` 패키지 사용

```bash
pnpm add @pixel-loader/react
```

```tsx
import { PixelLoader } from "@pixel-loader/react";
```

### Vue를 프로젝트에서 사용하고 싶어요

**해결책:** Next.js 대신 Nuxt.js 사용

```bash
pnpm add @pixel-loader/vue
```

완전한 예제는 `/examples-vue` 참고.

### Solid를 프로젝트에서 사용하고 싶어요

**해결책:** Next.js 대신 Solid Start 사용

```bash
pnpm add @pixel-loader/solid
```

완전한 예제는 `/examples-solid` 참고.

### Svelte를 프로젝트에서 사용하고 싶어요

**해결책:** Next.js 대신 SvelteKit 사용

```bash
pnpm add @pixel-loader/svelte
```

완전한 예제는 `/examples-svelte` 참고.

### 여러 프레임워크를 결합해야 해요

**해결책:** 마이크로 프론트엔드 아키텍처 사용

1. **Module Federation** - 긴밀하게 결합된 마이크로 프론트엔드에 적합
2. **single-spa** - 느슨하게 결합되고 독립적으로 배포 가능한 앱에 적합
3. **iframe** - 가장 간단하지만 UX 최악 (권장하지 않음)

### 프레임워크에 종속되지 않는 사용을 원해요

**해결책:** 모든 프레임워크에서 작동하는 웹 컴포넌트 직접 사용

`@pixel-loader/core` 패키지는 모든 곳에서 작동하는 표준 웹 컴포넌트를 내보냅니다:

```bash
pnpm add @pixel-loader/core
```

```javascript
import "@pixel-loader/core";

// 모든 프레임워크에서 작동
document.body.appendChild(
  Object.assign(document.createElement("pixel-loader"), {
    preset: "diagonal",
    size: 66,
    isAnimating: true
  })
);
```

## 요약 표

| 목표 | 추천 해결책 |
|------|-------------|
| Next.js에서 사용 | `@pixel-loader/react` |
| Vue에서 사용 | Nuxt.js + `@pixel-loader/vue` |
| Solid에서 사용 | Solid Start + `@pixel-loader/solid` |
| Svelte에서 사용 | SvelteKit + `@pixel-loader/svelte` |
| 프레임워크에 종속되지 않음 | `@pixel-loader/core` 웹 컴포넌트 |
| 여러 프레임워크 혼합 | 마이크로 프론트엔드 (Module Federation) |
| 간단한 통합 | iframe 격리 (권장하지 않음) |

## 결론

**Next.js는 설계상 React 전용입니다.** Vue, Solid, Svelte와 함께 Pixel Loader를 사용하려면 Next.js 대신 각각의 메타 프레임워크(Nuxt, Solid Start, SvelteKit)를 사용하세요.

**React 패키지**(`@pixel-loader/react`)는 Next.js용으로 특별히 설계되었으며, 완전한 TypeScript 지원과 프레임워크 통합으로 최고의 개발자 경험을 제공합니다.

**다중 프레임워크 프로젝트**의 경우 마이크로 프론트엔드 아키텍처를 고려하거나 프레임워크에 종속되지 않는 코드로 웹 컴포넌트를 직접 사용하세요.
