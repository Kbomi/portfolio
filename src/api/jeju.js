import { apiInstance } from './index.js'
import { objectToParams } from '@/utils/common.js'
const api = apiInstance()

function getJejuList(params) {
  return api
    .get(
      `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${
        import.meta.env.VITE_JEJU_API_KEY
      }&locale=kr&category=c1&${objectToParams(params)}`
    )
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      alert(error.message)
    })
}
export { getJejuList }
