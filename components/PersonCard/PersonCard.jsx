import React, { useContext } from 'react'
import { AuthContext } from "../../context/auth"
import Image from 'next/image'
import classNames from 'classnames'

const PersonCard = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='flex flex-col lg:flex-row items-center w-[300px] lg:w-2/5 h-full bg-white rounded-xl shadow-xl pt-20 pb-4 mt-16 relative'>
        <div className='font-bold text-2xl py-4 border-b-2 absolute top-4 left-0 w-11/12 mx-4'>Öğrenci Bilgileri</div>
        <div className='mx-16'>
            <Image src="/assets/images/user.jpg" width={150} height={150} alt='User photo' />
        </div>
        <div className='flex flex-col mt-4 text-sm w-full gap-y-4 ml-8'>
            <div className='flex gap-x-2'>
              <p>İsim :</p>
              <p className='font-semibold'>{user.full_name}</p>  
            </div>
            <div className='flex gap-x-2'>
              <p>Öğrenci Numarası :</p>
              <p className='font-semibold'>{user.student_no}</p>
            </div>
            <div className='flex gap-x-2'>
              <p>Fakülte :</p>
              <p className='font-semibold'>{user.student_department}</p>  
            </div>
            <div className='flex gap-x-2'>
              <p>Bölüm :</p>
              <p className='font-semibold'>{user.student_major}</p>  
            </div>
            <div className='flex gap-x-2'>
              <p>Statü :</p>
              <p className={classNames('text-white px-3 py-1 rounded-xl text-xs', user.is_active === true ? "bg-green-500" : "bg-red-500")}>{user.is_active === true ? "Aktif" : "Pasif"}</p>  
            </div>
        </div>
    </div>
  )
}

export default PersonCard