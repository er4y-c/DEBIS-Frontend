import React from 'react'

const CardHeader = ({ lessonData }) => {
  return (
    <div className=''>
        <div className='flex justify-center items-center gap-x-4 mt-8 mx-4'>
            <div className='flex justify-center items-center bg-blue-100 rounded-l w-16 h-16'> 
                <p className='text-blue-300 text-center text-sm'>{lessonData?.lesson_code}</p>
            </div>
              <p className='font-semibold w-3/4 text-sm'>{lessonData?.lesson_name}</p>  
        </div>
        <div className='flex justify-between mt-8 mx-4'>
            <p className='text-gray-800 mr-4'>Dersi veren : </p>
            <p className='text-gray-400 font-light font-light'>{lessonData?.teacher}</p>
        </div>
        <div className='flex justify-between mt-4 mx-4'>
            <p className='text-gray-800'>Birim :</p>
            <p className='text-gray-400 font-light'>{lessonData?.lesson_department}</p>
        </div>
        <div className='flex justify-between mt-4 mx-4'>
            <p className='text-gray-800'>AKTS :</p>
            <p className='text-gray-400 font-light'>{lessonData?.lesson_credit}</p>
        </div>
    </div>
  )
}

export default CardHeader