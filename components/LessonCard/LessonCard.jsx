import React from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

const LessonCard = ({ lessonData, nameData, codeData }) => {
  return (
    <div className='flex flex-col justify-center items-center w-[350px] bg-white rounded m-4'>
      <CardHeader name={ nameData } code={ codeData } />
      <CardContent examData={ lessonData } />
    </div>
  )
}

export default LessonCard