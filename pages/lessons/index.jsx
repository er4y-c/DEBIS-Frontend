import React, { useContext, useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import LessonCard from '../../components/LessonCard/LessonCard'
import { LessonContext, LessonContextProvider } from '../../context/lesson'
import { AuthContext } from '../../context/auth'
import { lesson_services } from '../../services/lesson'

const Lessons = () => {
  const { user } = useContext(AuthContext)
  const [lesson, setLesson] = useState([])
  const [filter, setFilter] = useState({
    year: 2023,
    semester: 0,
  })
  useEffect(() => {
    lesson_services.get_semester_lesson(user?.id, filter?.year, filter?.semester)
      .then((res) => {
        setLesson(res?.course_list)
      })
      .catch(() => {
        setLesson([])
      })
  }, [])

  return (
    <PageContainer showNavbar>
        <div className='flex flex-wrap gap-x-4'>
          {
            lesson.map((item, index)=>(
              <LessonCard lessonData={item} key={index}/>
            ))
          }
        </div>
    </PageContainer>
  )
}
Lessons.provider = LessonContextProvider
export default Lessons