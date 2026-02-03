# 릴리스 가이드

이 문서는 pixel-loader 프로젝트의 배포 절차를 안내합니다. Changesets를 사용하여 자동화된 버전 관리와 배포 프로세스를 구현했습니다.

## 개요

이 프로젝트는 GitHub Actions와 Changesets를 사용하여 다음과 같은 자동화된 워크플로우를 제공합니다:

- 버전 관리: Changesets에 기반한 자동 버전 업
- 배포: 버전 업 후 자동 npm 배포
- PR 리뷰: 배포 전 필수 검사

---

## 1. npm 배포 설정

### NPM_TOKEN 생성 방법

1. [npmjs.com](https://www.npmjs.com/)에 로그인합니다.
2. 오른쪽 상단 프로필 아이콘 → "Account Settings" 클릭
3. "Automation" 탭으로 이동합니다.
4. "Access Tokens" 섹션에서 "Create New Token" 클릭
5. Token 이름을 지정하고 ` automation` 권한을 선택합니다.
6. "Create Token" 클릭합니다.
7. 생성된 토큰을 **즉시 복사**합니다 (다시 볼 수 없습니다).

### GitHub Secret 설정 방법

1. GitHub 저장소에 접속합니다.
2. Settings → Secrets and variables → Actions 클릭
3. "New repository secret" 버튼 클릭
4. 다음과 같은 Secret을 추가합니다:
   - `NPM_TOKEN`: npm에서 생성한 토큰
   - `NODE_VERSION`: 사용하는 Node.js 버전 (예: `20`)
   - `PNPM_VERSION`: 사용하는 pnpm 버전 (예: `8`)

---

## 2. 개발자 워크플로우

### 변경사항 추가

1. 변경사항이 있을 파일을 수정합니다.
2. 터미널에서 다음 명령어를 실행합니다:
   ```bash
   pnpm changeset
   ```
3. 변경사 유형을 선택합니다:
   - `major`: 주요 변경 (파괴적 변경)
   - `minor`: 새 기능 추가
   - `patch`: 버그 수정
4. 변경 내용을 설명합니다.

### PR 생성 및 merge

1. `changeset` 명령어 실행 시 생성된 `.changeset` 디렉터리의 변경사항을 포함하여 PR을 생성합니다.
2. PR 제목에 `[changeset]` 접두사를 추가합니다 (예: `[changeset] feat: 새로운 기능 추가`).
3. PR을 merge합니다.

### 자동 버전 업과 배포

PR이 merge되면 GitHub Actions가 자동으로 실행됩니다:
1. `changeset version` 명령어로 버전 업
2. `pnpm build` 명령어로 빌드
3. `pnpm publish` 명령어로 npm 배포

---

## 3. 첫 배포 절차

### 1. changeset 초기화

프로젝트 처음에 changeset을 설정합니다:
```bash
npx changeset init
```

### 2. 빈 changeset 추가

최초 배포를 위해 빈 changeset을 추가합니다:
```bash
pnpm changeset add --empty
```

### 3. 버전 업 및 빌드

버전을 업데이트하고 프로젝트를 빌드합니다:
```bash
pnpm changeset version
pnpm build
```

### 4. npm 배포

```bash
pnpm changeset publish
```

---

## 4. 수동 배포 (필요한 경우)

CI/CD가 실패하거나 수동 배포가 필요할 경우:

### 버전 업

```bash
pnpm changeset version
```

### 빌드

```bash
pnpm build
```

### npm 배포

```bash
pnpm changeset publish
```

**주의**: 수동 배포 전에 `git commit`을 통해 버전 변경사항을 반드시 저장해야 합니다.

---

## OIDC Trusted Publishing으로 마이그레이션 (권장)

npm은 이제 더 이상 긴 수명의 토큰을 권장하지 않습니다. 대신 OIDC (OpenID Connect) Trusted Publishing을 사용하세요.

### 설정 단계

1. **npm Trusted Publisher 설정**
   - [npmjs.com](https://www.npmjs.com)에 접속
   - organization 설정 → Packages → 해당 패키지 선택
   - "Publishing" 탭 → "Add a publisher"
   - 다음 정보 입력:
     - **Name**: GitHub Actions
     - **GitHub Organization**: `pixel-loader` (또는 사용자명)
     - **Repository**: `pixel-loader`
     - **Workflow name**: `.github/workflows/release.yml`
     - **Environment**: (비워둠)

2. **release.yml에서 NPM_TOKEN 제거**

```yaml
# .github/workflows/release.yml에서 다음 라인 제거:
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  NPM_TOKEN: ${{ secrets.NPM_TOKEN }}  # ← 이 라인 제거
```

3. **GitHub Secret에서 NPM_TOKEN 삭제**
   - Settings → Secrets and variables → Actions
   - NPM_TOKEN 삭제

### OIDC 작동 방식

- GitHub Actions가 npm에 인증할 때 짧은 수명의 토큰을 자동 생성
- `id-token: write` 권한이 필요함 (이미 설정됨)
- 더 안전하고 토큰 관리가 필요 없음

### 참고 자료

- [Trusted publishing for npm packages](https://docs.npmjs.com/trusted-publishers/)

---

## 5. 참고 링크

### Changesets 문서
- [Changesets 공식 문서](https://github.com/changesets/changesets)
- [Changesets 사용 가이드](https://github.com/changesets/changesets/blob/main/docs/README.md)

### GitHub Actions workflow
- [`.github/workflows/release.yml`](https://github.com/your-repo/blob/main/.github/workflows/release.yml)
- [GitHub Actions 문서](https://docs.github.com/en/actions)

### 관련 도구
- [pnpm 패키지 매니저](https://pnpm.io/)
- [npm 배포 문서](https://docs.npmjs.com/cli/v8/commands/npm-publish)

---

## 6. 문제 해결

### 배포 실패 시 확인사항

1. **NPM_TOKEN이 올바르게 설정되었는지 확인**
   ```bash
   npm whoami
   ```

2. **패키지 이름 중복 확인**
   npm에서 동일한 이름의 패키지가 있는지 확인합니다.

3. **빌드 에러 확인**
   배포 전 로컬에서 빌드가 성공하는지 확인합니다:
   ```bash
   pnpm build
   ```

### Common Issues

- **"E403: forbidden"**: NPM_TOKEN이 만료되었거나 잘못되었는지 확인
- **"404 Not Found"**: 패키지 이름이 이미 존재하는지 확인
- **"The remote end hung up unexpectedly"**: 네트워크 문제 또는 npm 서버 문제

---

## 7. 배포 기록

배포 기록은 GitHub Releases와 npm 레지스트리에서 확인할 수 있습니다:

- [GitHub Releases](https://github.com/your-repo/releases)
- [npm 레지스트리](https://www.npmjs.com/package/pixel-loader)