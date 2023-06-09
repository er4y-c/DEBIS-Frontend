import React from 'react'
import CardHeader from './CardHeader'
const MenuComponent = ({ lessonData }) => {
  const menuItems = [
    "Duyurular",
    "Başarı Notları",
    "Sınıf Ortalamaları",
    "Ödevler",
    "Sınavlar",
    "Devam Durumu"
  ]
  return (
    <div className='flex flex-col justify-center w-[300px] bg-white rounded-xl'>
        <CardHeader lessonData={ lessonData } />
        <div className='flex flex-col items-start mx-4 font-light'>
          {
            menuItems.map((menu, index)=>(
              <button key={index} className='hover:bg-blue-100 hover:text-blue-500 w-full h-8 rounded text-sm'>{menu}</button>
            ))
          }
        </div>
    </div>
  )
}

export default MenuComponent