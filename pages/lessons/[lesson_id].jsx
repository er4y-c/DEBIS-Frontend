import React, { useEffect, useState, useContext } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import MenuComponent from '../../components/LessonMenu/MenuComponent'
import { useRouter } from 'next/router'
import { lesson_services } from '../../services/lesson'
import { LessonContext } from '../../context/lesson'
import { DevamDurumuPage, DuyurularPage, NotlarPage, OdevlerPage, SınavlarPage, SınıfPage } from '../../components/LessonPages'

const LessonPage = () => {
  const router = useRouter()
  const { lesson_id } = router.query

  const [lessonData, setLessonData] = useState({})
  const { selectedMenu, setSelectedMenu }=useContext(LessonContext)

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
                <MenuComponent lessonData={lessonData} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            </div>
            <div className='flex flex-col mt-4'>
              <div className='mx-8 text-2xl text-gray-700 font-semibold'>
                {selectedMenu}
              </div>
              { selectedMenu==='Duyurular' && <DuyurularPage lessonCode={lessonData?.lesson_code} />}
              { selectedMenu==='Başarı Notları' && <NotlarPage notData={lessonData} />}
              { selectedMenu==='Sınıf Ortalamaları' && <SınıfPage />}
              { selectedMenu==='Ödevler' && <OdevlerPage />}
              { selectedMenu==='Sınavlar' && <SınavlarPage />}
              { selectedMenu==='Devam Durumu' && <DevamDurumuPage />}
            </div>
        </div>
    </PageContainer>
  )
}

export default LessonPage