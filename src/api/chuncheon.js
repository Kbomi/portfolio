import { apiInstance } from './index.js'
import { objectToParams } from '@/utils/common.js'
const api = apiInstance()

function getFestivalList(params) {
  return api
    .get(`/ccculture/get_cultureList?${objectToParams(params)}`)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      alert(error.message)
    })
}
export { getFestivalList }
