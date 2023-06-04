import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const Dropdown = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option, value) => {
    setSelectedOption(option)
    setFilter(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between py-2 px-4 bg-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        onClick={toggleDropdown}
      >
        <input
          type="text"
          value={selectedOption}
          readOnly
          className="bg-transparent"
        />
        <HiChevronDown className="text-gray-500" />
      </div>
      {isOpen && (
        <ul className="absolute left-0 mt-2 py-2 w-40 bg-white border rounded-lg shadow-md">
          <li
            onClick={() => handleOptionClick("Güz", 0)}
            className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            Güz
          </li>
          <li
            onClick={() => handleOptionClick("Bahar", 1)}
            className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            Bahar
          </li>
          <li
            onClick={() => handleOptionClick("Yaz", 2)}
            className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            Yaz
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown