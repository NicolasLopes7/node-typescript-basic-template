import getFilesFromRoutesFolder from './utils/getFilesFromRoutesFolder';
import readLinesFromFile from './utils/readLinesFromFile';
import isThisLineARoute from './utils/isRoute';

const files = getFilesFromRoutesFolder();

const removeCharacters = (chars: string[], input: string) => {
  let newString = input;
  for (let i = 0; i <= chars.length; i += 1) {
    newString = newString.replace(chars[i], '');
  }
  console.log(newString);
  return newString;
};

const routes: string[] = [];
files.forEach((file) =>
  readLinesFromFile(file).forEach((line) =>
    isThisLineARoute(line) ? routes.push(line) : ''
  )
);

const rawMethodAndEndPoint = routes[0].match(/\.\b.*\W\W\W/)?.toString();
const [rawMethod, rawEndPoint] = rawMethodAndEndPoint?.split('(');
const method = rawMethod.replace('.', '').toUpperCase();
const endPoint = removeCharacters(
  [',', `'`, '', `''`, `'`, `""`, `"`, `"`],
  rawEndPoint
);
