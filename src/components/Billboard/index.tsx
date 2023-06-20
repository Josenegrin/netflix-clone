import useBillboard from '@/hooks/useBillboard'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Button from '../Button'
import PlayButton from '../PlayButton'

const Billboard = () => {
  const { data } = useBillboard()

  return (
    <div className="relative h-[56.25ve]">
      <video
      className="w-full h-[56.25vw] object-cover brightness-[60%]"
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        autoPlay
        muted
        loop
      >
      </video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p
          className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl"
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton type='play' movieId={data?.id}/>
          <Button
            type='billboard'
            onClick={() => console.log('onclick')}
          >
            <AiOutlineInfoCircle className="mr-2"/>
            Más informacion
          </Button> 
        </div>
      </div>
    </div>
  )
}

export default Billboard