import React from 'react'

const LoginInput = ({ id, name, type, placeholder, setData }) => {
  return (
    <input
        id={id}
        name={name}
        type={type}
        className="w-full py-4 pl-4 bg-transparent border border-gray-80 rounded"
        placeholder={placeholder}
        onChange={(e)=>{
            setData(e.target.value)
        }}
        required
      />
  )
}

export default LoginInput