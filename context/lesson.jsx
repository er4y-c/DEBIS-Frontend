import { createContext, useState, useEffect, useContext } from 'react'
import { lesson_services } from '../services/lesson'
import { AuthContext } from './auth'

export const LessonContext = createContext()

export const LessonContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [lesson, setLesson] = useState([])
    const [nameList, setNameList] = useState([])
    const [codeList, setCodeList] = useState([])
    const [year, setYear] = useState(2023)
    const [semester, setSemester] = useState("Güz")
    const [options, setOptions] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMenu, setSelectedMenu] = useState('Duyurular')

    const context = {
      lesson,
      setLesson,
      codeList,
      setCodeList,
      nameList,
      setNameList,
      selectedMenu,
      setSelectedMenu,
      year,
      setYear,
      semester,
      setSemester,
      options,
      setOptions,
      isLoading,
      setIsLoading,
    }
  
    return <LessonContext.Provider value={context}>{children}</LessonContext.Provider>
  }