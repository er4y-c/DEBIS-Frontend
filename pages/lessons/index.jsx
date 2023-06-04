import React, { useContext, useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import LessonCard from '../../components/LessonCard/LessonCard'
import { AuthContext } from '../../context/auth'
import { lesson_services } from '../../services/lesson'
import Dropdown from '../../components/Dropdown/Dropdown'

const Lessons = () => {
  const { user } = useContext(AuthContext)
  const [lesson, setLesson] = useState([])
  const [nameList, setNameList] = useState([])
  const [codeList, setCodeList] = useState([])
  const [year, setYear] = useState(2023)
  const [semester, setSemester] = useState("Güz")
  const [options, setOptions] = useState({})

  useEffect(() => {
    lesson_services.get_semester_lesson(user?.id, year, semester)
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
  }, [year, semester])
  useEffect(() => {
    lesson_services.get_dropdown_options(user?.id)
      .then((res) => {
        setOptions(res)
      })
      .catch(() => {
        setOptions({})
      })
  }, [])
  return (
    <PageContainer showNavbar>
        <div className='flex gap-x-4 mt-8 mr-4 w-full'>
          <div className='flex-1'>
            <Dropdown initialValue={year} setFilter={setYear} options={options?.years} />
          </div>
          <div className='flex-1'>
            <Dropdown initialValue={semester} setFilter={setSemester} options={options?.semesters} />
          </div>
        </div>
        <div className='flex flex-wrap gap-x-4 m-auto'>
          {
            lesson && codeList && nameList &&
            lesson.map((item, index)=>(
              <LessonCard lessonData={item} codeData={codeList[index]} nameData={nameList[index]} key={index} />
            ))
          }
          {
            !lesson && !codeList && !nameList &&
            <div>Page empty</div>
          }
        </div>
    </PageContainer>
  )
}

export default Lessons