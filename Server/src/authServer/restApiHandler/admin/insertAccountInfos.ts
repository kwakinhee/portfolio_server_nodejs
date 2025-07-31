// ----------------------------------------------------------------------------
// CMS(게임데이터 테이블)에 있는 Account 테이블 정보를 DB 유저정보에 insert.
// ----------------------------------------------------------------------------

import Container from "typedi";
import glog from "../../../commonlib/glog";
import {
  RequestAs,
  ResponseAs,
  IResponseBody,
  setError,
} from "../../../commonlib/gexpressEx";
import { DBConnPool } from "../../../mysqllib/pool";
import cms, { CmsTable } from "../../../cms";
import { AccountInfo } from "../../../cms/accountInfo";
import spUserCreate from "../../../mysqllib/sp/user/spUserCreate";

interface RequestBody {}

interface ResponseBody extends IResponseBody {
  accountinfos?: CmsTable<AccountInfo>;
}

export = async (req: RequestAs<RequestBody>, res: ResponseAs<ResponseBody>) => {
  glog.debug("/insert accountInfos req", req.body);

  // const {  }: RequestBody = req.body;
  const userDbPool = Container.of("user").get(DBConnPool);
  let accountTable: CmsTable<AccountInfo> = cms.Tables.Account;

  const promises = [];
  Object.values(accountTable).forEach((accountRaw: AccountInfo) => {
    promises.push(
      // spUserCreate(
      //   userDbPool.getPool(),
      //   accountRaw.LoginId,
      //   accountRaw.CharacterName,
      //   accountRaw.Admin
      // )
    );
    // glog.debug("cms.Tables.Accout value", val);
  });

  const resp: ResponseBody = {
    result: true,
  };

  return Promise.all(promises)
    .then(() => {
      resp.accountinfos = accountTable;
      res.json(resp);
    })
    .catch((err) => {
      setError(resp, err);
      res.json(resp);
    });
};
