// ----------------------------------------------------------------------------
// user 프로필 정보 가져오기.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GErrorCode } from "../../../commonlib/gerror";
export const spName = "p_user_load_profile";
export const errorCode = GErrorCode.USER_LOAD_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export interface LoadUserProfileResult {
  userId: number;
  accountId: string;
  characterName: string;
  characterCmsID: number;
}

export default function (
  connection: queryGenerator.Connection,
  userId: number
): Promise<LoadUserProfileResult> {
  return spFunction(connection, userId)
    .then((qr) => {
      const rows = qr.rows;
      let rowIndex = 0;
      const userData = rows[rowIndex][0];

      rowIndex += 1;
      const characterData = rows[rowIndex][0];

      return {
        userId: userData.userId,
        accountId: userData.accountId,
        characterName: userData.characterName,
        characterCmsID:
          undefined === characterData
            ? undefined
            : characterData.characterCmsId,
      };
    })
    .catch(catchHandler);
}
