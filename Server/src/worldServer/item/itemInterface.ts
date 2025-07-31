export interface IEquippable {
  isEquippable(): boolean;
  isEquipped(): boolean;
  onEquipped(): void;
  onUnequipped(): void;
}

export enum EDurabilityOp {
  SET,
  INCREASE,
  DECREASE,
}
