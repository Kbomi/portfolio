import store from '../../store/index'

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      store.commit('setLoading', true)

      return config
    },
    function (error) {
      store.commit('setLoading', false)

      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      store.commit('setLoading', false)

      return response
    },
    function (error) {
      store.commit('setLoading', false)

      return Promise.reject(error)
    }
  )
  return instance
}
