import { debis_api } from "./debis_api"

export const auth_services = {
  login: async(email, password) => {
    const res  = await debis_api.post(
      '/auth/login',
      { email, password },
    )
    const tokenData = res.data
    const { data: userInfo } = await debis_api.get('auth/me', {
      headers: { Authorization: "Bearer " + tokenData.access_token },
    })
    userInfo.access_token = tokenData.access_token
    return userInfo
    }
}