import axios from 'axios'
import { setInterceptors } from './common/interceptors'

function apiInstance() {
  const instance = axios.create({
    baseURL: 'https://portfolio.93rlaqhal.workers.dev',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return setInterceptors(instance)
}

export { apiInstance }
