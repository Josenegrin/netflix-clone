import React from 'react'
import { useRouter } from 'next/router'
import useMovie from '@/hooks/useMovie'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from '@/components/Button'
import { es } from '@/locale'

const Watch = () => {
  const { back, query: { movieId } } = useRouter()
  const { data } = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <Button
          onClick={() => back()}
          type='arrow'
        >
          <AiOutlineArrowLeft size={40}/>
        </Button>
        <p className='text-white text-1xl md:text-3xl font-bold'>
          <span className='font-light'>
            {es.player.watching.text}
          </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className='w-full h-full'
        src={data?.videoUrl}
      >  
      </video>
    </div>
  )
}

export default Watch