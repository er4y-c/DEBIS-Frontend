import React from 'react'
import Image from 'next/image'

const FormHeader = ({ title1, title2, src }) => {
  return (
    <div className="flex flex-col gap-x-4 justify-center items-center">
        <div className="mb-4">
            <Image src={src} width={100} height={100} />
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
            <p className="font-semibold text-4xl text-blue-700">{title1}</p>
            <p className="font-semibold text-2xl text-blue-700">{title2}</p>
        </div>  
    </div>
  )
}

export default FormHeader