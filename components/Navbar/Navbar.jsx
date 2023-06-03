import React, { useState } from 'react'
import Image from 'next/image'
import TransactionPopup from "./TransactionPopup"
import UserPopup from "./UserPopup"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuList = [
    {
      title: 'İşlem 1',
      href: '#'
    },
    {
      title: 'İşlem 2',
      href: '#'
    },
    {
      title: 'İşlem 3',
      href: '#'
    },
  ]
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <Image src="/assets/images/DEU_Logotype.png" alt="DEU logo" width={100} height={120}/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ana Sayfa
                </a>
                <button
                  onClick={toggleSubMenu}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  İşlemler
                </button>
                <TransactionPopup isOpen={isSubMenuOpen} menuList={menuList}/>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mail
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sıkça Sorulan Sorular
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Kullanıcı Menüsü</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="/assets/images/user.jpg"
                  alt="Profil Resmi"
                />
              </button>
              <UserPopup isOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
