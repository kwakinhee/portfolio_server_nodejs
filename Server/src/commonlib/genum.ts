// ----------------------------------------------------------------------------
// 모든 서버에서 공통으로 쓰이는 enum 상수 정의.
// ----------------------------------------------------------------------------

// 패킷 전송 방법.
export enum PAYLOAD_FLAG {
  ENCRYPT = 1,
  COMPRESS = 2,
  BINARY = 3,
  LOGOUT = 4,
}

// 서버별로 나눠서 정의.
export enum DISCONNECT_REASON {
  SOCKET_CLOSED = 1,
  ERROR_OCCURRED = 2,
  PING_TIMEOUT = 3,
  STOP_SERVER = 4,
  EXCEEDED_PAYLOAD = 5,
  ON_RECV_ERROR = 6,
  DUPLICATE_LOGIN_KICK = 7,
  KICK = 8,

  // World Server
  LOST_WORLD_MGR_SERVER_CONNECTION = 100,
  DESTROY_WORLD = 101,
  NORMAL_USER_QUIT = 102,
  ENTER_WORLD_KICK = 103,
  HEART_BEATH_EXPIRED = 104,
}

export enum KICK_REASON {
  DUPLICATE_LOGIN = 1,
  INVALID_ENTER_WORLD_TOKEN = 2,
}