import React, { useContext } from 'react'
import CardHeader from './CardHeader'
import { FaBuffer } from 'react-icons/fa'
import { LessonContext } from '../../context/lesson'
import classNames from 'classnames'
import { DevamDurumuPage, DuyurularPage, NotlarPage, OdevlerPage, SınavlarPage, SınıfPage } from '../LessonPages'

const MenuComponent = ({ lessonData, selectedMenu, setSelectedMenu }) => {

  const menuItems = [
    { title: "Duyurular", page: <DuyurularPage /> },
    { title: "Başarı Notları", page: <NotlarPage /> },
    { title: "Sınıf Ortalamaları", page: <SınıfPage /> },
    { title: "Ödevler", page: <OdevlerPage /> },
    { title: "Sınavlar", page: <SınavlarPage /> },
    { title: "Devam Durumu", page: <DevamDurumuPage /> }
  ]

  return (
    <div className='flex flex-col justify-center w-[300px] bg-white rounded-xl mt-8'>
        <CardHeader lessonData={ lessonData } />
        <div className='flex flex-col items-start mx-4 text-gray-700 my-8'>
          {
            menuItems.map((menu, index)=>(
              <div key={index} className={classNames('flex items-center gap-x-4 rounded w-full h-8 py-6 px-2 my-1 hover:bg-blue-100 hover:text-blue-500', selectedMenu === menu.title && 'bg-blue-100 text-blue-500')}>
                <FaBuffer/>
                <button className='text-sm' onClick={()=>setSelectedMenu(menu.title)}>{menu.title}</button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default MenuComponent