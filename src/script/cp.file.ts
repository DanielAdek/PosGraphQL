import fs from 'fs';
import path from 'path';

class FileCopier {

  public static copyGraphQlFile(): void {
    fs.copyFile(path.join(__dirname, "../schema/type-def.gql"), path.join(__dirname, "../../dist/"), (e) => {
      if (e) console.log(e.message);
      else
        console.log("File Copied");
    })
  }
}

FileCopier.copyGraphQlFile();