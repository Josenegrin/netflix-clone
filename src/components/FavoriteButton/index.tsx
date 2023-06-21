import React, { useCallback, useMemo } from 'react'
import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai' 
import axios from 'axios'
import Button from '../Button'
import { FavoriteButtonProps } from './interface'

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list =  currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorite = useCallback(async() => {
    let response
    if (isFavorite) {
      response = await axios.delete(`/api/favorite?id=${movieId}`)
    } else {
      response = await axios.post('/api/favorite', { movieId })
    }

    const updatedFavoriteIds = response?.data?.favoriteIds

    mutate({...currentUser,
    favoriteIds: updatedFavoriteIds})

    mutateFavorites()
  }, [currentUser, isFavorite, movieId, mutate, mutateFavorites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <Button
      type='favorite'
      onClick={toggleFavorite}
    >
      <Icon className='text-white' size={25}/>
    </Button>
  )
}

export default FavoriteButton