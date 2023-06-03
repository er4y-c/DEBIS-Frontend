import React from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

const LessonCard = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center w-[330px] bg-white rounded m-4'>
      <CardHeader />
      <CardContent />
    </div>
  )
}

export default LessonCard