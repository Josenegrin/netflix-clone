import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Billboard from '@/components/Billboard'
import Navbar from '@/components/Navbar'
import MovieList from '@/components/MovieList'
import useMovieList from '@/hooks/useMovieList'
import useFavorites from '@/hooks/useFavorites'
import InfoModal from '@/components/InfoModal'
import useInfoModal from '@/hooks/useInfoModal'
import { useRouter } from 'next/router'
import { es } from '@/locale'
import { useCallback } from 'react'

export default function Home() {
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()
  const { query } = useRouter()
  const { isOpen, closeModal } = useInfoModal()
  
  const getCategoryData = useCallback(
    () => {
      if (query.category === 'favorites') {
        return {
          title: es.category[query.category].text,
          data: favorites
        }
      } else {
        return null
      }
    },
    [favorites, query.category],
  )

  return (
  <div>
    <InfoModal visible={isOpen} onClose={closeModal}/>
    <Navbar />
    <Billboard />
    <div className='pb-40'>
      <MovieList title={getCategoryData()?.title || ''} data={getCategoryData()?.data}/>
    </div>
  </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}