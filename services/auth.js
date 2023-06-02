import axios from "axios"

export const auth_api = axios.create({
    baseURL: process.env.AUTH_BASE_URL,
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
        const { tokenData } = await auth_api.post(
            '/login',
            { email, password },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            },
          )
          const { data: userInfo } = await auth_api.get('/me', {
            headers: { Authorization: tokenData.access_token },
          })
          return userInfo
    }
}