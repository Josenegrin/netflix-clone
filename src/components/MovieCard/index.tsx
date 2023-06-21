import React from 'react'
import ResponsiveImage from '../ResponsiveImage/indes'
import FavoriteButton from '../FavoriteButton'
import PlayButton from '../PlayButton'
import useInfoModal from '@/hooks/useInfoModal'
import Button from '../Button'
import { BiChevronDown } from 'react-icons/bi'
import { MovieCardProps } from './interface'
import { es } from '@/locale'

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal()
  
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw] cursor-pointer'>
      <ResponsiveImage
        styles='w-full h-[12vw] transition duration shadow-xl group-hover:opacity-90 sm:group-hover:opacity-0 delay-300'
        imageStyles='rounded-md'
        src={data.thumbnailUrl}
        alt={data.title}
      />
      <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <ResponsiveImage
          styles='w-full h-[12vw] transition duration shadow-xl rounded-t-md'
          src={data.thumbnailUrl}
          alt={data.title}
        />
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <PlayButton
              type='playRounded'
              movieId={data?.id}
            />
            <FavoriteButton movieId={data?.id} />
            <Button
              type='modal'
              onClick={() => openModal(data?.id)}
            >
              <BiChevronDown className='text-white group-hover/item:text-neutral-300' size={25}/>
            </Button>
          </div>
          <p className='text-green-400 mt-4'>
            <strong>{es.movieCard.new.text}</strong>
            <span className='pl-1 text-white'>2023</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'><strong>{es.movieCard.duration.text}:</strong> {data.duration}</p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'><strong>{es.movieCard.genre.text}:</strong> {data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard