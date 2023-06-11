import React from "react"
import "../styles/global.css"
import { AuthContextProvider, ProtectRoute } from "../context/auth"
import { SWRConfig } from 'swr'
import { LessonContextProvider } from '../context/lesson'
export default function App({ Component, pageProps }) {
    return(
        <SWRConfig
            value={{
                shouldRetryOnError: false,
                revalidateOnFocus: false,
                refreshInterval: 0,
            }}
        >
            <AuthContextProvider>
                <ProtectRoute>
                  <LessonContextProvider>
                    <Component {...pageProps} />  
                  </LessonContextProvider>
                </ProtectRoute>
            </AuthContextProvider>
        </SWRConfig>
    )
}