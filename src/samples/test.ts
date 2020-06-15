/* eslint-disable no-nested-ternary */
import configDoc from './config.json';
import endpoints from './generated.json';

interface ParamInterface {
  name: string;
  type: string;
}
const populateEndPoints = (data: ParamInterface[]) => {
  return data
    .map((param, index) =>
      data.length > 1
        ? index === data.length
          ? `${param.name} (${param.type}),`
          : `${param.name} (${param.type}), \n`
        : `${param.name} (${param.type})`
    )
    .reduce((prevVal, currVal, idx) =>
      idx === 0 ? currVal : `${prevVal}${currVal}`
    );
};

export const generateReadme = () => {
  const title = `${configDoc.projectName} | V${configDoc.version}`;
  const subTitle = `By ${configDoc.author} on ${configDoc.BaseUrl}`;
  const endPoints = `${endpoints.endPoints.map(
    (endPoint) =>
      `${endPoint.method} ${endPoint.name} (${endPoint.version}): ${
        endPoint.endPoint
      }\n${
        endPoint.body.length > 0
          ? `Body: \n{\n${populateEndPoints(endPoint.body)}}`
          : ''
      }
      ${
        endPoint.params.length > 0
          ? `\nURL Params: ${populateEndPoints(endPoint.params)}`
          : ''
      }
      ${
        endPoint.queryParams.length > 0
          ? `\nQuery Params: ${populateEndPoints(endPoint.queryParams)}`
          : ''
      }
      ${
        endPoint.headers.length > 0
          ? `\nHeaders: ${populateEndPoints(endPoint.headers)}`
          : ''
      }`
  )}`;
  const text = `${title}\n${subTitle}\n${endPoints}`;
  return text;
};

console.log(generateReadme());
