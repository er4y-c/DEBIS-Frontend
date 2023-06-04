import React from "react"
import "../styles/global.css"
import { AuthContextProvider, ProtectRoute } from "../context/auth"
import { SWRConfig } from 'swr'

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
                <Component {...pageProps} /> 
                </ProtectRoute>
            </AuthContextProvider>
        </SWRConfig>
    )
}