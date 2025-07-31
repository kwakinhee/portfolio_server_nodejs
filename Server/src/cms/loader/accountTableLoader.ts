import TableLoader from "./tableLoader";
import { AccountInfo } from "../accountInfo";

export class AccountTableLoader extends TableLoader<AccountInfo> {
  constructor() {
    super("Account", false);
  }

  public loadInternal(data: AccountInfo): boolean {
    if (!data.Active)
    {
      return false;
    }

    return true;
  }

  public postLoadInternal(data: AccountInfo): boolean {
    return true;
  }

  protected makeReference(data: AccountInfo): boolean {
    return true;
  }
}

export default AccountTableLoader;