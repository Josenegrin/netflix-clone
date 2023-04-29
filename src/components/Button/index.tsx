import React from 'react'

interface ButtonProps {
  text?: string
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className='bg-red-600 text-white rounded-md  w-full py-3 mt-10 hover:bg-red-700 transition'>
      {text}
    </button>
  )
}

export default Button