import React, { useEffect, useState, useContext } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import MenuComponent from '../../components/LessonMenu/MenuComponent'
import { useRouter } from 'next/router'
import { lesson_services } from '../../services/lesson'
import { LessonContext } from '../../context/lesson'

const LessonPage = () => {
  const router = useRouter()
  const { lesson_id } = router.query
  console.log(lesson_id)
  const [lessonData, setLessonData] = useState({})
  const { selectedMenu } = useContext(LessonContext)

  useEffect(()=>{
    lesson_services.get_current_lesson(lesson_id)
    .then((res)=>{
      setLessonData(res?.course_detail)
    })
    .catch(()=>{
      setLessonData({})
    })
  }, [lesson_id])

  return (
    <PageContainer>
        <div className='flex'>
            <div>
                <MenuComponent lessonData={lessonData} />
            </div>
            <div>{ selectedMenu }</div>
        </div>
    </PageContainer>
  )
}

export default LessonPage