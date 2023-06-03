import React from 'react'

const UserPopup = ({ isOpen }) => {
  return (
    <div>
        {isOpen && (
            <div className="origin-top-right absolute right-0 mt-[40px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Profil
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Ayarlar
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Çıkış Yap
                    </a>
                </div>
            </div>
            )}
    </div>
  )
}

export default UserPopup