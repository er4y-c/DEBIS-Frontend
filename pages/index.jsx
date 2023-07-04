import React, { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import PersonCard from '../components/PersonCard/PersonCard'
import { announce_services } from '../services/announcement'
import AnnounceCard from '../components/Announcement/AnnounceCard'

const HomePage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const lessonCode = 'CS-101'
    announce_services.get_announcement(lessonCode)
    .then((res) => setData(res?.announcements))
  }, [])

  return (
    <PageContainer>
      <div className='flex flex-col lg:flex-row gap-x-16 items-start'>
        <PersonCard />
        <AnnounceCard announceData={data} />
      </div>
    </PageContainer>
  )
}

export default HomePage