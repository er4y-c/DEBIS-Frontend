import React from 'react'

const CardHeader = () => {
  return (
    <div className='flex justify-center items-center gap-x-4 mt-8 mx-2'>
        <div className='flex shrink-0'>
            <p className='text-blue-400 bg-blue-100 rounded-xl py-4 px-3 font-semibold'>CS-101</p>
        </div>
        <div className=''>
            <p className='font-bold'>Bilgisayar Bilimlerine Giriş-1</p>
        </div>
    </div>
  )
}

export default CardHeader