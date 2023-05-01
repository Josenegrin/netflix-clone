import React from 'react'

interface NavbarItemProps {
  label: string;
  isMobile?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({label, isMobile}) => {
  const mobileStyles = 'px-3 text-center text-white hover:underline'
  const responsiveStyles = 'text-white cursor-pointer hover:text-gray-300 transition'

  return (
    <div className={isMobile ? mobileStyles : responsiveStyles}>
      {label}
    </div>
  )
}

export default NavbarItem