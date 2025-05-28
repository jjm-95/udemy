## 1. GIT이란?

- **Git**은 버전 관리 시스템(VCS, Version Control System)으로, 소스 코드의 변경 이력을 관리합니다.
- 여러 명이 동시에 협업할 수 있도록 돕는 도구입니다.

## 2. GitHub란?

- **GitHub**는 Git 저장소를 웹에서 관리할 수 있도록 도와주는 플랫폼입니다.
- 원격 저장소(Remote Repository)를 제공해 협업과 백업에 유리합니다.

---

## 3. Git 설치 확인

```bash
git --version
```

## 4.Git 기본 설정

```bash
git config --global user.name "사용자 이름"
git config --global user.email "이메일 주소"
```

>전역 설정(`--global`)은 모든 프로젝트에 적용됩니다.

## 5. Git 로컬 저장소 만들기

```bash
git init
```

> 현재 디렉토리를 Git 저장소로 초기화합니다.

## 6. Git 기본 명령어
### 변경 사항 확인

```bash
git status
```

### 파일 스테이징(추가)

```bash
git add 파일명

# 또는 전체 파일
git add .
```

### 커밋하기

```bash
git commit -m "커밋 메시지"
```

### 커밋 로그 보기

```bash
git log
```

---

## 7. GitHub 연동하기

### 1. GitHub에서 저장소 생성

- GitHub 로그인 → `New repository` → 저장소 이름 입력 → 생성

### 2. 원격 저장소 연결

```bash
git remote add origin https://github.com/사용자명/저장소명.git
```
### 3. 푸시(Push)

```bash
git push -u origin main
```

> 최초 푸시 시 `-u` 옵션을 사용해 기본 브랜치를 설정합니다.  
> 초기 브랜치가 `master`인 경우 `main` 대신 `master` 사용.

---

## 8. 원격 저장소 클론하기

```bash
git clone https://github.com/사용자명/저장소명.git
```

---

## 9. 변경 사항 가져오기

```shell
git pull
```

> 원격 저장소의 최신 변경사항을 가져옵니다.

---

## 10. 브랜치 사용하기

### 브랜치 생성

``` bash
git branch 브랜치이름
```

### 브랜치 이동

```bash
git checkout 브랜치이름
```

### 브랜치 생성과 동시에 이동

```
git checkout -b 브랜치이름
```

---

## 11. 병합(Merge)

```bash
git checkout main
git merge 브랜치이름
```

---

## 12. 기타 유용한 명령어

### 변경사항 취소

```bash
git checkout -- 파일명
```

### 마지막 커밋 수정

```bash
git commit --amend
```

---

## 13. .gitignore 파일

- Git이 추적하지 않도록 제외할 파일/디렉토리 지정

예시:

```bash
node_modules/
.env
.DS_Store
```

---

## 14. GitHub에서 협업하기

### 저장소 포크(Fork)

- 다른 사람의 저장소를 내 계정으로 복사

### 풀 리퀘스트(Pull Request)

- 변경사항을 원본 저장소에 요청하는 기능

---

## 15. 추천 GUI 도구

- **GitHub Desktop**: 초보자용 GUI 클라이언트
- **Sourcetree**: Git 시각화에 강한 도구
- **VS Code Git 연동**: Git 패널에서 직관적으로 관리 가능

---

## 💡 Tip

- 작은 단위로 자주 커밋하기
- 커밋 메시지를 명확하게 작성하기
- `.gitignore`를 적절히 설정해 불필요한 파일은 추적하지 않기