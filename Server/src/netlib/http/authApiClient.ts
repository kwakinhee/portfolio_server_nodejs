import { BaseApiClient } from "./baseApiClient";
import gconf from "../../commonlib/gconf";
/**
 * rest user
 */
export interface EnterWorldResult {
  bValidEnterWorldToken: boolean;
  accountId: string;
  pubId: string;
  userId: number;
  isAdmin: number;
}

export class AuthApiClient extends BaseApiClient {
  constructor() {
    super();
  }

  enterWorld(
    isDevLogin: boolean,
    accountId: string,
    serverGroupId: number,
    enterWorldToken: string
  ): Promise<EnterWorldResult> {
    const body = {
      isDevLogin,
      accountId,
      serverGroupId,
      enterWorldToken,
      worldServerId: gconf.appId,
    };
    return this.post("/enterWorld", body);
  }

  logout(accountId: string): Promise<void> {
    const body = { accountId };
    return this.post("/logout", body).then(() => undefined);
  }
}
