import path from 'path';
import fs from 'fs';

export default function getFilesFromRoutesFolder() {
  const baseDir = path.join(__dirname, '..', '/..', '/samples/src/routes/');
  const filesArray: string[] = [];

  const observedDir = fs.readdirSync(baseDir);
  observedDir.forEach((file) => filesArray.push(`${baseDir}/${file}`));
  return filesArray;
}
