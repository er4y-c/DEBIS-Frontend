import axios from "axios"
import Cookies from "js-cookie"

export const debis_api = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  
  debis_api.interceptors.request.use(
    (config) => {
      const myConfig = config
      const token = Cookies.get('token')
      if (token) {
        myConfig.headers.Authorization = `Bearer ${token}`
      }
      return myConfig
    },
    (error) => Promise.reject(error),
    '',
  )
  
  debis_api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        Cookies.remove('token')
        Cookies.remove('user-info')
        // eslint-disable-next-line no-restricted-globals
        location.reload()
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ ...error })
    },
  )