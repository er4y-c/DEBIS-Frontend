import React from 'react'
import Navbar from '../Navbar/Navbar'

const PageContainer = ({ children, showNavbar=true }) => {
    return (
      <div className='h-full w-full bg-gray-200'>
        { showNavbar && <Navbar /> }
        <div className='flex pl-32'>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default PageContainer;