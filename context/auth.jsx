import { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import Login from '../pages/auth/login'
import { useRouter } from 'next/router'
import jwt2 from 'jwt-decode'
import { auth_services } from '../services/auth'

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
  loginError: '',
  redirectPage: '/',
  setUser: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [redirectPage, setRedirectPage] = useState('/')
  const router = useRouter()

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user-info')
    router.replace('/auth/login')
    router.reload()
  }

  useEffect(() => {
    const token = Cookies.get('token')

    if (
      !token &&
      router.pathname !== '/auth/login'
    ) {
      setAuthReady(false)
      setRedirectPage(router.asPath)
      router.push('/auth/login')
    }

    if (token && token !== "undefined") {
      const decoded = jwt2(token)
      const userInfo = JSON.parse(Cookies.get('user-info'))
      const currentTime = new Date().getTime() / 1000

      if (currentTime > decoded.exp) {
        return logout()
      }

      if (decoded) {
        setAuthReady(true)
        setUser(userInfo)
        Cookies.set('token', token)
        // Cookies.set('user-info', JSON.stringify(decoded))
        // router.push(redirectPage)
      }
    }
  }, [])

  const login = async (email, password) => {
    await auth_services
      .login(email, password)
      .then((response) => {
        Cookies.set('token', response.access_token, { expires: 60 })
        Cookies.set('user-info', JSON.stringify(response), { expires: 60 })
        router.replace(redirectPage)
        setLoginError(undefined)
        setAuthReady(true)
        setUser(response)
        setRedirectPage('/')
      })
      .catch((err) => {
        Cookies.remove('token')
        Cookies.remove('user-info')
        setUser(null)
        setAuthReady(false)

        if (err?.response?.status === 401) {
          setLoginError('Incorrect email or password')
          return
        }
        if (err?.response?.status === 404) {
          setLoginError('No user found')
          return
        }
        setLoginError(err?.response?.data?.message)
      })
  }

  const context = {
    user,
    authReady,
    setAuthReady,
    login,
    logout,
    loginError,
    redirectPage,
    setRedirectPage,
    setUser,
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

const AUTH_PATHS = [
  '/auth/login',
]

export const ProtectRoute = ({ children }) => {
  const { authReady, setRedirectPage } = useContext(AuthContext)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (authReady === false) {
    if (router.pathname !== '/auth/login') {
      setRedirectPage(router.asPath)
      return <Login />
    }
    return children
  }
  if (authReady && AUTH_PATHS.includes(router.pathname)) {
    router.push('/')
  }
  return children
}