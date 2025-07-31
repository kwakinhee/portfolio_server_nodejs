// ----------------------------------------------------------------------------
// api 폴더의 폴더명이 라우터 핸들러로 등록.
// ----------------------------------------------------------------------------

import path from "path";
import express from "express";
import urljoin from "url-join";
import glog from "./glog";
import * as gutil from "./gutil";

// ----------------------------------------------------------------------------
// Private functions.
// ----------------------------------------------------------------------------

export async function registerFile(
  fileName: string,
  app: express.Application,
  url: string,
  directory: string
): Promise<any> {
  const ignores = ["index.js"];
  if (ignores.indexOf(fileName) !== -1) {
    return;
  }

  glog.debug("dirAsApi register file", {
    fileName,
    url,
    directory,
  });

  const filePath = path.join(directory, fileName);

  const stats = await gutil.stat(filePath);
  if (stats.isDirectory()) {
    return registerDir(app, urljoin(url, fileName), filePath);
  }

  if (!stats.isFile()) {
    return;
  }

  const ext = path.extname(fileName);
  if (ext !== ".js") {
    return;
  }

  const base = path.basename(fileName, ext);
  const modulePath = path.join(directory, base);
  let apiUrl = urljoin(url, base);
  if (apiUrl.charAt(0) !== "/") {
    apiUrl = "/" + apiUrl;
  }

  glog.verbose("Registering api ...", { path: apiUrl });

  app.post(apiUrl, require(modulePath));
}

export async function registerDir(
  app: express.Application,
  url: string,
  directory: string
) {
  const files = await gutil.readdir(directory);
  const registrations = files.map((file) =>
    registerFile(file, app, url, directory)
  );
  return Promise.all(registrations);
}

// -------------------------------------------------------------------------------------------------
// Public functions.
// -------------------------------------------------------------------------------------------------

export async function register(app: express.Application, directory: string) {
  return registerDir(app, "", directory);
}
