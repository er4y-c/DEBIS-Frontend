import React from "react"
import "../styles/global.css"
import { AuthContextProvider, ProtectRoute } from "../context/auth"

export default function App({ Component, pageProps }) {
    return(
        <AuthContextProvider>
            <ProtectRoute>
               <Component {...pageProps} /> 
            </ProtectRoute>
        </AuthContextProvider>
        
    )
}