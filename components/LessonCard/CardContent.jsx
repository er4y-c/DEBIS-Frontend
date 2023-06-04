import React from 'react'

const CardContent = ({ examData }) => {
  return (
    <table className='w-4/5 mt-4 mb-8'>
        <thead>
          <tr>
            <th className='border-b-2 border-gray-100 px-4 py-2 font-medium'>Oran</th>
            <th className='border-b-2 border-gray-100 px-4 py-2 font-medium'>Sınav</th>
            <th className='border-b-2 border-gray-100 px-4 py-2 font-medium'>Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>25</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>Ara Sınav</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>{examData?.ara_sinav}</td>
          </tr>
          <tr>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>15</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>Kısa Sınav</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>{examData?.diger_sinav}</td>
          </tr>
          <tr>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>60</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>Final</td>
            <td className='border-b-2 border-gray-100 px-4 py-2 text-sm'>{examData?.final}</td>
          </tr>
          <tr>
            <td colSpan='3' className='h-3'></td>
          </tr>
          <tr>
            <td className='px-4 py-2 text-sm font-semibold'>100</td>
            <td className='px-4 py-2 font-semibold text-sm'>Başarı Notu</td>
            <td className='px-4 py-2 font-semibold text-sm'>AA</td>
          </tr>
        </tbody>
      </table>
  )
}

export default CardContent