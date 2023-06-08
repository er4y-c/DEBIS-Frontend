import React from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'

const LessonCard = ({ lessonData, nameData, codeData }) => {
  return (
    <div className='flex flex-col justify-center items-center w-[350px] bg-white rounded m-4 shadow-md'>
      <CardHeader name={ nameData } code={ codeData } lessonId={lessonData?.lesson_id} />
      <CardContent examData={ lessonData } />
    </div>
  )
}

export default LessonCard