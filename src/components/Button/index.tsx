import React from 'react'
import { ButtonProps } from './interface'
import { buttonStylesTypes } from './styles'

const Button: React.FC<ButtonProps> = ({ children, styles, type, onClick }) => {

  return (
    <button
      onClick={onClick}
      className={styles ? styles : type && buttonStylesTypes[type] ? buttonStylesTypes[type] : buttonStylesTypes.default}
    >
      {children}
    </button>
  )
}

export default Button