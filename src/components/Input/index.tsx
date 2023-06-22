import React from 'react'
import { InputProps } from './interface'

const Input: React.FC<InputProps> = ({
  name, onChange, value, label, type
}) => {
  return (
    <div className="relative">
      <input
      placeholder={name}
      value={value}
      onChange={onChange}
      type={type}
      className='placeholder-transparent block rounded-md py-6 px-6 text-md appearance-none focus:outline-none focus:ring-0 bg-neutral-700 text-white peer self-center w-full'
      name={name}
      />
      <label
      htmlFor={name}
      className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        {label}
      </label>
    </div>
  )
}

export default Input