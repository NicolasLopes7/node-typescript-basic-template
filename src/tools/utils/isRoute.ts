/* eslint-disable no-useless-escape */
export default function isThisLineARoute(line: string) {
  if (/routes\.\w.*\W\'\/.*\'\,.*\..*\W/.test(line)) return true;
  return false;
}
