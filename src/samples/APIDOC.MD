{projectName} - {version}
##### {author} | {BaseUrl}
----------------------------
### EndPoints:
endPoints.map((endPoint) => (
`${endPoint.method} - ${endPoint.name}(V${endPoint.version})
{endPoint.body.length > 0 ? endPoint.body.map((param) => {
  `json
  {
    ${}
  }
  `
})}
`
))
{method} - {name {version}}: {endPoint}
if(body.length > 0) body.map((param) => {

})
{description}
