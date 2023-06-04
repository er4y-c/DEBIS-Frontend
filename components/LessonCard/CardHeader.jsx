import React from 'react'

const CardHeader = ({ headerData }) => {
  return (
    <div className='flex justify-center items-center gap-x-4 mt-8 mx-2'>
        <div className='flex shrink-0'>
            <p className='text-blue-400 bg-blue-100 rounded-xl py-4 px-3 font-semibold'>{headerData?.lesson_id}</p>
        </div>
        <div className=''>
            <p className='font-bold'>{headerData?.lesson_id}</p>
        </div>
    </div>
  )
}

export default CardHeader