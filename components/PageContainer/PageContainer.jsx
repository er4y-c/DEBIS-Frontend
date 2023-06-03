import React from 'react'
import Navbar from '../Navbar/Navbar'

const PageContainer = ({ children, showNavbar=true }) => {
    return (
      <div className='h-screen bg-gray-200'>
        { showNavbar && <Navbar /> }
        <div className='flex'>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default PageContainer;