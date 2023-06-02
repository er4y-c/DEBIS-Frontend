import React from 'react'

const LoginInput = ({ id, name, type, placeholder }) => {
  return (
    <input
        id={id}
        name={name}
        type={type}
        className="w-full py-4 pl-4 bg-transparent border border-gray-80 rounded"
        placeholder={placeholder}
        required
      />
  )
}

export default LoginInput