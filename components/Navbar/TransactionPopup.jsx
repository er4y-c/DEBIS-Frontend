import React from 'react'

const TransactionPopup = ({ isOpen, menuList }) => {
  return (
    <>
    {isOpen &&
        <div className="absolute mt-12 py-2 w-48 bg-white rounded-md shadow-lg z-20">
        {menuList.map((menu, index)=>(
            <a
                key={index}
                href={menu?.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
            {menu?.title}
            </a>  
            ))
        }
        </div>
    }
  </>
  )
}

export default TransactionPopup