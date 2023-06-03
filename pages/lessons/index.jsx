import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import LessonCard from '../../components/LessonCard/LessonCard'
const Lessons = () => {

  return (
    <PageContainer showNavbar>
        <div>
          <LessonCard />
        </div>
    </PageContainer>
  )
}

export default Lessons