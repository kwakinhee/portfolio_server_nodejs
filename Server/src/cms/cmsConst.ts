// ----------------------------------------------------------------------------
// CMS Table 에서 정의된 const 정의.
// ----------------------------------------------------------------------------

// 아바타 슬롯 최대 개수
export const SlotMaxCount = 39;

// 아바타 리스트 항목의 최대 개수
export const AvatarListMaxCount = 100;

// 아바타 보유 최대 개수
export const AvatarItemInventoryCount = 999999;

// 브로드 캐스팅 메시지 저장 제한 개수
export const BroadCasingMessageMaxCount = 5;

// 계정 이름 글자수를 바이트 단위로 계산(0:글자수, 1:Byte)
export const AccountByteCheck = false;

// 계정 이름 최소 길이(영어단독)
export const AccountMinimumEnglishLength = 4;

// 계정 이름 최소 길이(숫자+영문 혼합)
export const AccountMinimumMixedLength = 4;

// 계정 이름 최대 길이(영어단독)
export const AccountMaximumEnglishLength = 20;

// 계정 이름 최대 길이(숫자+영문 혼합)
export const AccountMaximumMixedLength = 20;

// 캐릭터 이름 글자수를 바이트 단위로 계산(0:글자수, 1:Byte)
export const CharacterByteCheck = false;

// 캐릭터 이름 최소 길이(한글단독)
export const CharacterMinimumHangeulLength = 2;

// 캐릭터 이름 최소 길이(숫자단독)
export const CharacterMinimumNumberLength = 2;

// 캐릭터 이름 최소 길이(영어단독)
export const CharacterMinimumEnglishLength = 2;

// 캐릭터 이름 최소 길이(혼합)
export const CharacterMinimumMixedLength = 2;

// 캐릭터 이름 최대 길이(한글단독)
export const CharacterMaximumHangeulLength = 8;

// 캐릭터 이름 최대 길이(숫자단독)
export const CharacterMaximumNumberLength = 12;

// 캐릭터 이름 최대 길이(영어단독)
export const CharacterMaximumEnglishLength = 12;

// 캐릭터 이름 최대 길이(혼합)
export const CharacterMaximumMixedLength = 8;

// 아이템 사용불가 일자 갱신 시간(매일 00:00) 임시 설정 값
export const ItemLifeDailyResetTime = 0;

// 월드 스폰 시간(매일 00:000) 임시 설정 값
export const WorldSpawnDailyResetTime = 0;

// 캐릭터 기본 이동 속도 (1 = 1cm/s)
export const CharacterMoveSpeed = 105;

// 캐릭터 빠른 이동 속도 (1 = 1cm/s)
export const CharacterRunSpeed = 375;

// 캐릭터 캣워크 이동 속도 (1 = 1cm/s)
export const CharacterCatwalkSpeed = 131;

// 캐릭터 충돌 이동 속도 이동 속도 (1 = 1cm/s)
export const CharacterCrashSpeed = 110;

// PC의 맨손 상호 작용 거리 제한입니다. (1 = 1cm)
export const CharacterIndicatorRangeHand = 100;

// PC의 맨손 상호 작용 범위 제한입니다. (1 = 0.1°)
export const CharacterIndicatorAngleHand = 300;

// PC의 구멍 메우기 상호 작용 거리 제한. (1 = 1cm)
export const CharacterIndicatorRangeFill = 100;

// PC의 구멍 메우기 상호 작용 범위 제한입니다. (1 = 0.1°)
export const CharacterIndicatorAngleFill = 30;

// PC의 도끼 거리 제한입니다. (1 = 1cm)
export const CharacterIndicatorRangeAxe = 100;

// PC의 도끼 범위 제한입니다. (1 = 0.1°)
export const CharacterIndicatorAngleAxe = 300;

// PC의 아이템 줍기 거리 제한입니다. (1 = 1cm)
export const CharacterIndicatorRangePick = 100;

// PC의 아이템 줍기 범위 제한입니다. (1 = 0.1°)
export const CharacterIndicatorAnglePick = 300;

// PC의 NPC 대화 상호 작용 거리 제한입니다. (1 = 1cm)
export const CharacterIndicatorRangeNPC = 100;

// PC의 NPC 대화 상호 작용 범위 제한입니다. (1 = 0.1°)
export const CharacterIndicatorAngleNPC = 300;

// 나무 아이템 내구도 리셋 시간입니다. (매일 00:00)
export const TreeDurabilityResetTime = 0;

// 나무 아이템 드랍 리셋 시간입니다. (매일 00:00)
export const TreeItemDropStackResetTime = 0;

// 바위 아이템 내구도 리셋 시간입니다. (매일 00:00)
export const RockDurabilityResetTime = 0;

// 바위 아이템 드랍 리셋 시간입니다. (매일 00:00)
export const RockItemDropStackResetTime = 0;
