// ----------------------------------------------------------------------------
// user 정보 가져오기.
// ----------------------------------------------------------------------------

import * as queryGenerator from "../../queryGenerator";
import { GErrorCode } from "../../../commonlib/gerror";

export const spName = "p_character_load";
export const errorCode = GErrorCode.USER_LOAD_CHARACTER_QUERY_ERROR;

const spFunction = queryGenerator.generateSPFunction(spName);
const catchHandler = queryGenerator.generateGErrorRejection(errorCode);

export default function (
  connection: queryGenerator.Connection,
  userId: number
): Promise<number> {
  return spFunction(connection, userId)
    .then((qr) => {
      const rows = qr.rows;
      let rowIndex = 0;
      const characterData = rows[rowIndex][0];
      if (characterData) {
        return characterData.characterCmsId;
      }
      return null;
    })
    .catch(catchHandler);
}
