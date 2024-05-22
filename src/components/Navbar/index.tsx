import React, { useState, useEffect } from 'react'
import ResponsiveImage from '../ResponsiveImage/indes'
import NavbarItem from '../NavbarItem/indes'
import { BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from '../MobileMenu'
import { menuItems } from '@/lib/menuItems'
import AccountMenu from '../AccountMenu'
import { useRouter } from 'next/router'

const TOP_OFFSET = 66

const Navbar = () => {
  const [showBackground, setShowBackground] = useState<boolean>(false)
  const { push } = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div
        className={`
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}
      >
        <ResponsiveImage
          styles='h-4 w-20 md:h-7 md:w-36'
          src='/images/logo.png'
          alt='Logo'
        />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          {menuItems.map((item) => <NavbarItem key={`NavItem-${item.label}`} label={item.label} onClick={() => push(`${item.route}`)} />)}
        </div>
        <MobileMenu />
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 transition hidden'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 transition hidden'>
            <BsBell />
          </div>
          <AccountMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar