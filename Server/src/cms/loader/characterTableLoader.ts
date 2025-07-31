import TableLoader from "./tableLoader";
import { CharacterInfo } from "../characterInfo";

export class CharacterTableLoader extends TableLoader<CharacterInfo> {
  constructor() {
    super("Character", false);
  }

  public loadInternal(data: CharacterInfo): boolean {
    return true;
  }

  public postLoadInternal(data: CharacterInfo): boolean {
    return true;
  }

  protected makeReference(data: CharacterInfo): boolean {
    
    return true;
  }
}

export default CharacterTableLoader;