import React from 'react'

const CardHeader = ({ name, code }) => {
  return (
    <div className='flex items-center gap-x-4 mt-8 ml-16 mr-8 w-full'>
        <div>
            <p className='text-blue-400 bg-blue-100 rounded-xl py-4 px-3 font-semibold w-24'>{code}</p>
        </div>
        <div>
            <p className='font-bold'>{name}</p>
        </div>
    </div>
  )
}

export default CardHeader