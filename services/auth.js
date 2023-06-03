import axios from "axios"
import Cookies from "js-cookie"

export const auth_api = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

auth_api.interceptors.request.use((config) => {
    const myConfig = config
    const token = Cookies.get('token')
    if (token) {
      myConfig.headers.Authorization = `Bearer ${token}`
    }
    return myConfig
  })

export const auth_services = {
  login: async(email, password) => {
    const res  = await auth_api.post(
      '/auth/login',
      { email, password },
    )
    const tokenData = res.data 
    console.log(tokenData)
    const { data: userInfo } = await auth_api.get('auth/me', {
      headers: { Authorization: "Bearer " + tokenData.access_token },
    })
    userInfo.access_token = tokenData.access_token
    console.log(userInfo)
    return userInfo
    }
}