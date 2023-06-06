import axios from 'axios'

function apiInstance() {
  const instance = axios.create({
    baseURL: 'https://portfolio.93rlaqhal.workers.dev',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return instance
}

export { apiInstance }
