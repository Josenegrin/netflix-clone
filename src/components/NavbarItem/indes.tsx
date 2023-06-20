import React from 'react'
import { NavbarItemProps } from './interface'

const NavbarItem: React.FC<NavbarItemProps> = ({label, isMobile, onClick}) => {
  const mobileStyles = 'px-3 text-center text-white hover:underline'
  const responsiveStyles = 'text-white cursor-pointer hover:text-gray-300 transition'
  
  return (
    <div className={isMobile ? mobileStyles : responsiveStyles} onClick={onClick}>
      {label}
    </div>
  )
}

export default NavbarItem