import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import FormHeader from '../../components/LoginComponents/FormHeader'
import LoginInput from '../../components/LoginComponents/LoginInput'
import LoginButton from '../../components/LoginComponents/LoginButton'
import { auth_services } from '../../services/auth'
import { AuthContext } from '../../context/auth'
const login = () => {
  const { login } = useContext(AuthContext) 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return (
    <>
    <Head>
        <title>DEBIS Login</title>
    </Head>
    <div className='flex justify-center align-center h-[100vh]'>
        <div className='relative w-[50vw]'>
            <Image src="/assets/images/deu_background.png" alt='Deu campus' fill priority/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
            <div className='flex flex-col w-2/3 gap-y-4 relative pb-12'>
                <FormHeader 
                    title1="DEBIS"
                    title2="Dokuz Eylül Üniversitesi Bilgi Sistemi"
                    src="/assets/images/deu_logo_white.png"
                />
                <LoginInput
                    id="login_email"
                    name="login_email"
                    type="email"
                    placeholder="Eposta adresi"
                    setData={setEmail}
                />
                <LoginInput
                    id="login_password"
                    name="login_password"
                    type="password"
                    placeholder="Parola"
                    setData={setPassword}
                />
                <div>
                  <LoginButton text="Giriş Yap" onClick={()=>login(email, password)}/>   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default login