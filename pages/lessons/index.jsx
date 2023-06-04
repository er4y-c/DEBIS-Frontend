import React, { useContext, useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import LessonCard from '../../components/LessonCard/LessonCard'
import { AuthContext } from '../../context/auth'
import { lesson_services } from '../../services/lesson'

const Lessons = () => {
  const { user } = useContext(AuthContext)
  const [lesson, setLesson] = useState([])
  const [nameList, setNameList] = useState([])
  const [codeList, setCodeList] = useState([])
  const [filter, setFilter] = useState({
    year: 2023,
    semester: 0,
  })
  useEffect(() => {
    lesson_services.get_semester_lesson(user?.id, filter?.year, filter?.semester)
      .then((res) => {
        setLesson(res?.course_list)
        setCodeList(res?.course_codes)
        setNameList(res?.course_names)
      })
      .catch(() => {
        setLesson([])
        setCodeList([])
        setNameList([])
      })
  }, [])

  return (
    <PageContainer showNavbar>
        <div className='flex flex-wrap gap-x-4 m-auto'>
          {
            lesson && codeList && nameList &&
            lesson.map((item, index)=>(
              <LessonCard lessonData={item} codeData={codeList[index]} nameData={nameList[index]} key={index} />
            ))
          }
        </div>
    </PageContainer>
  )
}

export default Lessons