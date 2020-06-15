import fs from 'fs';

export default function readLinesFromFile(input: string) {
  const arrayOfLines = fs
    .readFileSync(input, 'utf8')
    .toString()
    .split('\n')
    .filter((line) => line !== '');
  return arrayOfLines;
}
