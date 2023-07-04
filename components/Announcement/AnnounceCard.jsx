import React from 'react'

const AnnounceCard = ({ announceData }) => {
  return (
    <div className='flex flex-col bg-white rounded-xl shadow-xl p-4 w-2/3'>
      <div className='font-bold text-2xl py-4 border-b-2'>Duyurular</div>
      <div>
       {
        announceData.map((announce) => (
          <>
            <p className='text-sm text-gray-400 mt-16 mx-4'>{announce?.announcement_date}</p>
            <div key={announce?.id} className='bg-gray-100 px-4 py-2 rounded-xl mt-2'>
                <p className='font-semibold text-xl'>{announce?.announcement_title}</p>
                <p className='pt-4'>{announce?.announcement_content}</p>
            </div>
          </>
        ))
       }
      </div>
    </div>
  )
}

export default AnnounceCard
