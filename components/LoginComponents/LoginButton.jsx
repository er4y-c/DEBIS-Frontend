import React from 'react'

const LoginButton = ({ text, onClick }) => {
  return (
    <button 
        className="absolute bottom-0 right-0 bg-blue-500 text-white font-medium rounded py-3 px-4"
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default LoginButton