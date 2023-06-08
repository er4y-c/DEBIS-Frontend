import React from 'react'

const MenuComponent = ({ lessonData }) => {
  return (
    <div className='flex flex-col justify-center w-[300px] bg-white rounded-xl mx-16 my-16'>
        <div className='flex justify-center items-center gap-x-4 mt-8 mx-4'>
            <div className='flex justify-center items-center bg-blue-100 rounded-full w-16 h-16'> 
                <p className='text-gray-400 font-semibold text-blue-300 text-center'>{lessonData?.lesson_code}</p>
            </div>
            <div className=''>
              <p className='font-semibold w-3/4 text-sm'>{lessonData?.lesson_name}</p>  
            </div>
            
        </div>
        <div className='flex flex-col mt-8 ml-4 font-roboto'>
            <p className='text-gray-800 mr-4 font-roboto'>Dersi veren : </p>
            <p className='text-gray-400 font-roboto'>{lessonData?.teacher}</p>
        </div>
        <div className='flex flex-col justify-center items-center my-8'>
            <p className='text-gray-800'>{lessonData?.teacher}</p>
            <p className='text-gray-800'>{lessonData?.lesson_credit}</p>
        </div>
    </div>
  )
}

export default MenuComponent