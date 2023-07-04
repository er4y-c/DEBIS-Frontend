import React, { useState, useEffect } from 'react'
import AnnounceCard from '../Announcement/AnnounceCard'
import { announce_services } from '../../services/announcement'

const DuyurularPage = ({ lessonCode }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    announce_services.get_announcement(lessonCode)
    .then((res) => setData(res?.announcements))
  }, [lessonCode])

  return (
    <div className='ml-32'>
      <AnnounceCard announceData={data}/>
    </div>
  )
}

export default DuyurularPage