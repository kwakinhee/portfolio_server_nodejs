// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

import spAccountIsOnlineUpdate from "../../sp/auth/spAccountIsOnlineUpdate";

export default function txnLogout(dbConnPool, accountId: string) {
  return spAccountIsOnlineUpdate(dbConnPool, accountId, 0);
}
