import { createContext, useState, useEffect, useContext } from 'react'
import { lesson_services } from '../services/lesson'
import { AuthContext } from './auth'

export const LessonContext = createContext({
    lesson: null,
    filter: null,
    setFilter: () => {},
})

export const LessonContextProvider = ({ children }) => {
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

    const [selectedMenu, setSelectedMenu] = useState('Duyurular')

    const context = {
      lesson,
      setLesson,
      filter,
      setFilter,
      codeList,
      setCodeList,
      nameList,
      setNameList,
      selectedMenu,
      setSelectedMenu,
    }
  
    return <LessonContext.Provider value={context}>{children}</LessonContext.Provider>
  }