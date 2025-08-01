
Inhee Game Server 
# 📡 Game Server Backend (TypeScript 기반 서버)

> **멀티 서버 기반 게임 서버 백엔드** 프로젝트로, 인증부터 월드서버 운영까지 모듈화된 아키텍처를 통해 고성능 실시간 처리를 지원합니다.  


## 🔧 기술 스택

- **Node.js** + **TypeScript**
- **Net 모듈 기반 서버<-서버 클라<->서버 TCP**
- **Net 모듈 기반 클라<->서버 UDP 통신 데드레커닝 구현예정**
- **Axios 모듈 기반 서버<-서버 클라<->서버 restApi 통신**
- **MySQL Table, SP Migration 처리**
- **Lua 스크립트를 통한 Redis 최적화 처리**
- **패킷 프로토 Google Protocol Buffers 적용**
- **PM2 프로세스 관리**
- **Jenkins -> deployScript -> 클라우드(AWS) 서버, DB CI/CD 배포 자동화**


---

## 🗂 서버 아키텍처 구성도 (Mermaid)

```mermaid
flowchart TD
    Client -->|REST API| authServer
    authServer -->|Access| authDB
    authServer -->|Cache| Redis[(Redis)]
    authServer -->|REST API| worldServer
    worldServer -->|Access| userDB
    authServer -->|PubSub| RedisPubSub
    worldServer -->|PubSub| RedisPubSub
    worldServer -->|TCP| worldMgrServer
    configServer -->|REST API| authServer
    configServer -->|REST API| worldServer
    configServer -->|REST API| worldMgrServer
```

> 아키텍처는 실시간 유저 인증, 서버 스케일아웃 가능한 설정 아키텍쳐, 설정 전파,  DB 샤딩 및 마이그레이션, Redis 캐시 및 Pub/Sub을 통한 메시징 구조 등으로 설계되어 있습니다.


## 📎 참고
> 본 포트폴리오 코드는 '대항해시대 오리진(MMORPG)', '이말년과 침착한 녀석들(MORPG)'
  자이언트스텝 'Kampers' 초기 프로토타입의 상용 프로젝트 서버 개발에 참여하며 
  쌓은 실전 경험과 아키텍처 설계 인사이트를 바탕으로 구축한 개인 포트폴리오입니다.
- 서버 상세 설명은 [`Server/README.md`](./Server/README.md) 참고