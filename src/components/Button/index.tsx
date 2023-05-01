import React from 'react'

interface ButtonProps {
  children: React.ReactElement<HTMLParagraphElement> | React.ReactNode;
  text?: string
  styles?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({children, styles, onClick}) => {
const defaultClassName = 'bg-red-600 text-white rounded-md  w-full py-3 mt-10 hover:bg-red-700 transition'

  return (
    <button
      onClick={onClick}
      className={ styles ? styles : defaultClassName}
    >
      {children}
    </button>
  )
}

export default Button