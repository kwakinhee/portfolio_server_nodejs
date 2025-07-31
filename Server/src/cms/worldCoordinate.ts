// ----------------------------------------------------------------------------
// 월드 룸 좌표 계산에 사용되는 상수, 공식.
// ----------------------------------------------------------------------------
import {toDegrees} from "../formula";

export const CalcWorldDistance = (
  loc1: { x: number; y: number; z:number; },
  loc2: { x: number; y: number; z:number; }
) => {

  const dx = loc1.x - loc2.x;
  const dy = loc1.y - loc2.y;
  const dz = loc1.z - loc2.z;
  let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  return distance;
};

export const CalcWorldDegrees = (
    loc1: { x: number; y: number;  },
    loc2: { x: number; y: number;  }
) => {

    const dx = loc1.x - loc2.x;
    const dy = loc1.y - loc2.y;
  let degrees = toDegrees(Math.atan2(dy, dx));
  return (degrees + 360) % 360;
};

