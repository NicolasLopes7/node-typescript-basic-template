/* eslint-disable no-nested-ternary */
import configDoc from './samples/config.json';
import endpoints from './samples/generated.json';

interface ParamInterface {
  name: string;
  type: string;
}
const concatenateAnArrayOfStrings = (stringArray: string[]) => {
  return stringArray.reduce((prevVal, currVal, idx) =>
    idx === 0 ? currVal : `${prevVal}${currVal}`
  );
};

const populateParams = (data: ParamInterface[]) => {
  return concatenateAnArrayOfStrings(
    data.map((param, index) =>
      data.length > 1
        ? index === data.length
          ? `${param.name} (**${param.type}**),`
          : `${param.name} (**${param.type}**), \n`
        : `${param.name} (**${param.type}**)`
    )
  );
};

export const generateReadme = () => {
  const title = `#${configDoc.projectName} | V${configDoc.version}`;
  const subTitle = `####By ${configDoc.author} on ${configDoc.BaseUrl}\n---\n`;
  const endPoints = `${concatenateAnArrayOfStrings(
    endpoints.endPoints.map(
      (endPoint) =>
        `${endPoint.method} ${endPoint.name} (${endPoint.version}): ${
          endPoint.endPoint
        }\n${
          endPoint.body.length > 0
            ? endPoint.body.length > 1
              ? `Body: \n{\n${populateParams(endPoint.body)}}`
              : `Body: \n{\n${populateParams(endPoint.body)}\n}`
            : ''
        }
      ${
        endPoint.params.length > 0
          ? endPoint.params.length > 1
            ? `\nURL Params: \n{\n${populateParams(endPoint.params)}}`
            : `\nURL Params: \n{\n${populateParams(endPoint.params)}\n}`
          : ''
      }
      ${
        endPoint.queryParams.length > 0
          ? endPoint.queryParams.length > 1
            ? `\nQuery Params: \n{\n${populateParams(endPoint.queryParams)}}`
            : `\nQuery Params: \n{\n${populateParams(endPoint.queryParams)}\n}`
          : ''
      }
      ${
        endPoint.headers.length > 0
          ? `\nHeaders: \n{\n${populateParams(endPoint.headers)}}\n`
          : ''
      }
      ${
        endPoint.response.length > 0
          ? `\nResponse: \n{\n${populateParams(endPoint.response)}}\n----\n`
          : ''
      }`
    )
  )}`;
  const text = `${title}\n${subTitle}\n${endPoints}`;
  return text;
};
