import { useCallback, useState } from "react"
import Input from "@/components/Input"
import Image from "next/image"
import Button from "@/components/Button"
import { es } from "@/locale"

const Auth = () => {
  const [initialValue, setInitialValue] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialValue({...initialValue, [e.target.name]: e.target.value})
  }

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src='/images/logo.png' alt="Logo" width={200} height={100}/>
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
                  value={initialValue.username}
                  label={es.auth.form.username.label}
                  onChange={handleChange}/>
              )}
              <Input
                name='email'
                type='email'
                value={initialValue.email}
                label={es.auth.form.email.label}
                onChange={handleChange}/>
              <Input
                name='password'
                type='password'
                value={initialValue.password}
                label={es.auth.form.password.label}
                onChange={handleChange}/>
              <Button text={variant === 'login' ? 'Iniciar sesión' : 'Crea una cuenta'}/>
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