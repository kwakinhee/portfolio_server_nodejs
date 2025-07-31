Inhee Game Server 
# 📡 Game Server Backend (TypeScript 기반 서버)

> **멀티 서버 기반 게임 서버 백엔드** 프로젝트로, 인증부터 월드서버 운영까지 모듈화된 아키텍처를 통해 고성능 실시간 처리를 지원합니다.  

---

## 📁 프로젝트 디렉토리 구조

```bash
.
├── config/               # 개발 환경별 공통 설정 JSON
├── migrations/           # DB 테이블 및 인증/유저 마이그레이션 (js/sql)
├── pm2/                  # 각 서버별 PM2 프로세스 설정
├── procedures/           # 인증, 유저 관련 MySQL 프로시저 정의 (js/sql)
├── redis_script/         # Redis Lua 스크립트 모음
├── scripts/              # 빌드/배포/서버 실행 스크립트
├── service_layer/        # 각 서버별 컨텐츠 설정 JSON (서비스 구분)
├── docker/               # AWS EC2 배포용 Docker Compose / Stack 설정
├── Packet/               # 서버간 socket/cs 통신용 Google .proto 파일들
├── Table/                # 게임 기획 데이터 XLSX → JSON 변환기
├── src/                  # 핵심 서버 로직
│   ├── authServer/       # 유저 인증 서버
│   ├── botClient/        # 테스트용 봇 유닛 클라이언트
│   ├── cms/              # 게임 데이터 테이블 관리 CMS 모듈
│   ├── commonlib/        # 공통 유틸 (log, error, util, threadPool 등)
│   ├── configServer/     # 설정 서버: 각 서버에 REST로 설정 전파
│   ├── deploy/           # AWS 기반 CI/CD 배포 스크립트
│   ├── formula/          # 게임 수학 공식 계산 로직
│   ├── mysqllib/         # MySQL 프로시저 호출 인터페이스
│   ├── netlib/           # 네트워크 통신 모듈 (REST, TCP, UDP)
│   ├── proto/            # Google Protobuf 정의 및 서버간 메시지 통신
│   ├── redislib/         # Redis Script 호출 모듈
│   ├── worldMgrServer/   # 각 게임 월드 상태/유저 매칭 관리 서버
│   └── worldServer/      # 실제 유저가 접속하는 게임 월드 서버
```


## 🗺️ 서버 아키텍처 구성도

![서버 아키텍처 구성도](../documents/ServerArchitecture.svg)

> 아키텍처는 실시간 유저 인증과 접속 분산, 설정 전파, Redis 캐시 및 Pub/Sub을 통한 메시징 구조로 설계되어 있습니다.

---

## 🚀 실행 방법

```bash
# 의존성 설치
yarn install

# 개발 서버 실행 예시 (PM2 사용)
pm2 start pm2/authServer.config.js
pm2 start pm2/worldMgrServer.config.js
...

# 테스트용 봇 실행
yarn ts-node src/botClient/main.ts
```

---

## 🧪 테스트/유닛

- 각 서버 모듈은 유닛 테스트 및 E2E 테스트용 스크립트를 포함하고 있습니다.
- `botClient`를 통한 시뮬레이션 테스트 수행 가능

---

## 📌 개발 영역 설명

| 기능 영역         | 설명 연계성                                                             |
|------------------|--------------------------------------------------------------------------|
| 인증 서버        | 유저 로그인/토큰 검증/세션 처리                                         |
| 월드 서버        | 유저 접속 처리, 실시간 게임 로직 처리                                   |
| 설정 서버        | 환경별 설정 동기화, 배포 환경 전환                                      |
| DB 프로시저      | 마이그레이션 자동화 및 운영 중 테이블 구조 변경 관리                    |
| 프로토콜 설계    | Google ProtoBuf 기반의 경량 서버 간 메시지 설계                         |
| PM2 스크립트     | 환경별 서버 실행 자동화, 실시간 모니터링                                |
| Redis 최적화     | Lua 스크립트 기반 빠른 캐시 처리 및 세션 관리                           |
| 공통 라이브러리  | 서버간 공통 유틸 통합 및 유지보수 용이성 확보                           |

---
