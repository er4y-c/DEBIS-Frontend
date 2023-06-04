import React, { useContext } from 'react'
import { AuthContext } from "../../context/auth"
import Image from 'next/image'
import classNames from 'classnames'

const PersonCard = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='flex flex-col justify-center items-center w-[300px] bg-white rounded-xl mx-16 my-16'>
        <div className='mt-8'>
            <Image className='rounded-xl' src="/assets/images/user.jpg" width={100} height={100} alt='User photo' />
        </div>
        <div className='flex flex-col justify-center items-center mt-4'>
            <p className='font-semibold text-xl'>{user.full_name}</p>
            <p className='text-gray-400 text-sm'>{user.student_no}</p>
        </div>
        <div className='flex flex-col justify-center items-center my-8'>
            <p className='text-gray-800'>{user.student_department}</p>
            <p className='text-gray-800'>{user.student_major}</p>
        </div>
        <div>
            <p className={classNames('text-white px-3 py-1 mb-2 rounded-xl text-xs', user.is_active === true ? "bg-green-500" : "bg-red-500")}>{user.is_active === true ? "Aktif" : "Pasif"}</p>
        </div>
    </div>
  )
}

export default PersonCard