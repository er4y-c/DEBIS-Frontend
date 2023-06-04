import React from 'react'
import Navbar from '../Navbar/Navbar'

const PageContainer = ({ children, showNavbar=true }) => {
    return (
      <div className='min-h-screen w-full bg-gray-200'>
        { showNavbar && <Navbar /> }
        <div className='flex flex-col justify-between px-32'>
          <div className='w-full'>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default PageContainer;