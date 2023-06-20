import React from 'react'
import { PlayButtonProps } from './interface'
import { useRouter } from 'next/router'
import Button from '../Button'
import { BsFillPlayFill } from 'react-icons/bs'
import { es } from '../../locale/es'

const PlayButton: React.FC<PlayButtonProps> = ({movieId, type}) => {
  const hasText = {play: true, playRounded: false}
  const { push } = useRouter()
  const text = type && hasText[type] ? es.buttons.play.text : ''

  return (
    <Button
      type={type}
      onClick={() => push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill className={text ? 'mr-1' : ''} size={25}/>
      {text}
    </Button>
  )
}

export default PlayButton