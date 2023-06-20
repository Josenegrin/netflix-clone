import { signOut } from 'next-auth/react'
import React, { useCallback, useState } from 'react'
import useCurrentUser from '@/hooks/useCurrentUser'
import ResponsiveImage from '../ResponsiveImage/indes'
import { es } from '@/locale'
import { BsChevronDown } from 'react-icons/bs'

const AccountMenu = () => {
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false)

  const { data: user } = useCurrentUser()

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  return (
    <div
      onClick={toggleAccountMenu}
      className='flex flex-row items-center gap-2 cursor-pointer relative'
    >
      <ResponsiveImage
        styles='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'
        src='/images/default-blue.png'
        alt='Profile'
      />
      <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
      { showAccountMenu && (
        <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
          <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
              <ResponsiveImage imageStyles='rounded-md' styles='h-8 w-8 rounded-md' alt='AccountProfile' src='/images/default-blue.png' />
              <p className='text-white text-sm group-hover/item:underline'>
                {user.name || ''}
              </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-4' />
            <div
              onClick={() => signOut()}
              className='px-3 text-center text-white text-sm hover:underline'
            >
              {es.navBar.accountMenu.signOut.text}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountMenu