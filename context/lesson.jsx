import { createContext, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { lesson_services } from '../services/lesson'
import { AuthContext } from './auth'

export const LessonContext = createContext({
    lesson: null,
    filter: null,
    setFilter: () => {},
})

export const LessonContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState({
      year: 2022,
      semester: 0,
    });
    const [lesson, setLesson] = useState([]);
  
    const getLessons = async () => {
      try {
        const data = await lesson_services.get_semester_lesson(
          user.id,
          filter.year,
          filter.semester
        );
        return data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    useEffect(() => {
      lesson_services.get_semester_lesson(
        user.id,
        filter.year,
        filter.semester
      ).then((res) => {
        setLesson(res)
      }).catch(() => {
        setLesson([])
      })
    }, [])
  
    const context = {
      lesson,
      filter,
      setFilter,
    }
  
    return (
      <LessonContext.Provider value={context}>{children}</LessonContext.Provider>
    )
  }