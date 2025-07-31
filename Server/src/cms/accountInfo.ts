import TableBaseType from "./tableBaseType";

export interface AccountInfo extends TableBaseType {
  // id: number;
  LoginId: string;
  CharacterName: string;
  Admin: number;
}
