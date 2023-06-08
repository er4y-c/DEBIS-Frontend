import React from 'react'

import { useRouter } from 'next/router'
const CardHeader = ({ name, code, lessonId }) => {
  const router = useRouter()
  return (
    <div className='flex items-center gap-x-4 mt-8 ml-16 mr-8 w-full'>
        <div onClick={()=> router.push(`/lessons/${lessonId}`)}>
            <p className='text-blue-400 bg-blue-100 rounded-xl py-4 px-3 font-semibold w-24 hover:cursor-pointer'>{code}</p>
        </div>
        <div onClick={()=> router.push(`/lessons/${lessonId}`)}>
            <p className='font-bold hover:cursor-pointer'>{name}</p>
        </div>
    </div>
  )
}

export default CardHeader