import React from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

const LessonCard = ({ lessonData }) => {
  return (
    <div className='flex flex-col justify-center items-center w-[330px] bg-white rounded m-4'>
      <CardHeader headerData={ lessonData } />
      <CardContent examData={ lessonData } />
    </div>
  )
}

export default LessonCard