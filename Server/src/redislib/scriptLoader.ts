// -------------------------------------------------------------------------------------------------
//
// -------------------------------------------------------------------------------------------------
import path from "path";

import * as gutil from "../commonlib/gutil";
// For replication.
const scriptPrefix = "redis.replicate_commands()\n";

// -------------------------------------------------------------------------------------------------
// scripts = {
//   functionName: {
//     fileName: 'foo.lua',
//     content: '...'
//   },
//   .
//   .
//   .
// }
// -------------------------------------------------------------------------------------------------

export const loadDir = (dir) => {
  const scripts = {};
  const dirPath = path.join(__dirname, "..", "..", "redis_script", dir);

  return gutil
    .readdir(dirPath)
    .then((files) => {
      return files.filter((fileName) => {
        return path.extname(fileName) === ".lua";
      });
    })
    .then((luaFiles) => {
      return Promise.all(
        luaFiles.map((luaFile) => {
          const elem: any = {};
          elem.fileName = luaFile;
          const filePath = path.join(dirPath, luaFile);
          return gutil.readFile(filePath, "utf8").then((content) => {
            elem.content = scriptPrefix + content;
            scripts[path.basename(luaFile, ".lua")] = elem;
          });
        })
      );
    })
    .then(() => {
      // glog.debug('[TEMP] scripts: ', JSON.stringify(scripts));
      return scripts;
    });
};
