import React, { useContext } from 'react'
import { AuthContext } from "../../context/auth"

const UserPopup = ({ isOpen }) => {
  const { logout } = useContext(AuthContext)
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
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={logout}
                    >
                      Çıkış Yap
                    </button>
                </div>
            </div>
            )}
    </div>
  )
}

export default UserPopup