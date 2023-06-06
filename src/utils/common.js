export const objectToParams = (obj) => {
  return Object.keys(obj)
    .map((key) => key + '=' + obj[key])
    .join('&')
}
