import fs from "fs";
import path from "path";
import glog from "../../commonlib/glog";
import TableBaseType from "../tableBaseType";

const cmsRoot = path.resolve(
  path.join(__dirname, "..", "..", "..", "..", "Table", "json2")
);

export abstract class TableLoader<Type extends TableBaseType> {
  public readonly typeName: string;
  public readonly useStringId: boolean;
  public idMap = new Map<number, Type>();
  public stringIdMap = new Map<string, Type>();

  constructor(typename: string, useStringId: boolean = true) {
    this.typeName = typename;
    this.useStringId = useStringId;
  }

  public Find(id: number): Type {
    return this.idMap.get(id);
  }

  public FindByStringId(id: string): Type {
    if (!this.useStringId) {
      return null;
    }

    return this.stringIdMap.get(id);
  }

  public load(): boolean {
    const filePath = path.join(cmsRoot, `${this.typeName}.json`);
    const file = fs.readFileSync(filePath, "utf8");
    glog.info(`[${this.typeName}TableLoader] - Load begin. path:${filePath}`);
    try {
      const converted = file.replace(/^\s+|\s+$/g, "");
      const list: Type[] = JSON.parse(converted);
      let ret: boolean = true;
      list.forEach((data) => {
        if (!data.Active) {
          return;
        }

        if (!this.loadInternal(data)) {
          ret = false;
          return;
        }

        const prevData = this.idMap.get(data.Id);
        if (prevData) {
          ret = false;
          glog.error(
            `[${this.typeName}TableLoader] - Id duplicated. Id:${data.Id}, Prev Data StringId:${prevData.StringId}`
          );
          return;
        }

        this.idMap.set(data.Id, data);
        if (this.useStringId) {
          if (this.stringIdMap.has(data.StringId)) {
            ret = false;
            glog.error(
              `[${this.typeName}TableLoader] - StringId duplicated. Id:${data.Id}, StringId:${data.StringId}`
            );
            return;
          }

          this.stringIdMap.set(data.StringId, data);
        }
      });

      if (!ret) {
        throw new Error("Load internal failed.");
      }

      glog.info(
        `[${this.typeName}TableLoader] - Load Complete. total:${this.idMap.size}`
      );
    } catch (err) {
      glog.error(
        `[${this.typeName}TableLoader] - Data Load Failed. msg:${err.message}`
      );
      return false;
    }

    return true;
  }

  public postLoad(): boolean {
    let ret: boolean = true;
    this.idMap.forEach((data) => {
      if (!this.postLoadInternal(data)) {
        ret = false;
        glog.error(
          `[${this.typeName}TableLoader] PostLoad failed. Id:${data.Id}, StringId:${data.StringId}`
        );
      }

      if (!this.makeReference(data)) {
        ret = false;
        glog.error(
          `[${this.typeName}TableLoader] Make Reference failed. Id:${data.Id}, StringId:${data.StringId}`
        );
      }
    });

    return ret;
  }

  public abstract loadInternal(data: Type): boolean;
  public abstract postLoadInternal(data: Type): boolean;
  protected abstract makeReference(data: Type): boolean;
}

export default TableLoader;
