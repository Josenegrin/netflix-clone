import React, { useCallback, useState } from 'react'
import { menuItems } from '@/lib/menuItems'
import NavbarItem from '../NavbarItem/indes'
import { es } from '@/locale'
import { BsChevronDown } from 'react-icons/bs'
import { useRouter } from 'next/router'

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const { push } = useRouter()
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  return (
    <div
      className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
      onClick={toggleMobileMenu}
    >
      <span className='text-white text-sm'>{es.navBar.mobileMenu.browse.text}</span>
      <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
      { showMobileMenu && (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
          <div className='flex flex-col gap-4'>
            {menuItems.map(({label, route}) => {
              return <NavbarItem
                key={`mobileMenuOptions-${label}`}
                label={label}
                isMobile
                onClick={() => push(`${route}`)}
                />
            }
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu