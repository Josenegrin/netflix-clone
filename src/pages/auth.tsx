import { useCallback, useState } from 'react'
import Input from '@/components/Input'
import Image from 'next/image'
import Button from '@/components/Button'
import { es } from '@/locale'
import axios from 'axios'
import { signIn } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const Auth = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email: formValue.email,
        password: formValue.password,
        callbackUrl: '/profiles'
      })

    } catch (error) {
      console.log(error)
    }
  }, [formValue.email, formValue.password])

  const register = useCallback(async () => {
    try {
      await axios.post('api/register', {
        email: formValue.email,
        name: formValue.username,
        password: formValue.password
      })

      login()
    } catch (error) {
      console.log(error)
    }
  }, [formValue.email, formValue.username, formValue.password, login])
  
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src='/images/logo.png'
            alt="Logo"
            width={200}
            height={100}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 md:w-2/3 md:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? es.auth.login.title : es.auth.register.title}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  name='username'
                  type='text'
                  value={formValue.username}
                  label={es.auth.form.username.label}
                  onChange={handleChange} />
              )}
              <Input
                name='email'
                type='email'
                value={formValue.email}
                label={es.auth.form.email.label}
                onChange={handleChange} />
              <Input
                name='password'
                type='password'
                value={formValue.password}
                label={es.auth.form.password.label}
                onChange={handleChange} />
              <Button
                onClick={variant === 'login' ? login : register}
                >
                {variant === 'login' ? 'Iniciar sesión' : 'Crea una cuenta'}
              </Button>
              <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                <Button
                  onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                  styles='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'
                >
                  <FcGoogle size={30} />
                </Button>
                <Button
                  onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                  styles='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'
                >
                  <FaGithub size={30} />
                </Button>
                <Button
                  onClick={() => signIn('facebook', { callbackUrl: '/profiles' })}
                  styles='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'
                >
                  <BsFacebook size={30} color={'#3b5998'} />
                </Button>
              </div>
              <p className='text-neutral-500 mt-12 text-center'>
                {variant === 'login' ? es.auth.login.footer.text : es.auth.register.footer.text}
                <span
                  onClick={toggleVariant}
                  className='text-white ml-1 text-1 hover:underline cursor-pointer'>
                  {variant === 'login' ? es.auth.login.footer.action : es.auth.register.footer.action}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth