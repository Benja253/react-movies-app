import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import HeroSection from '../components/MoviePage/HeroSection'
import Credits from '../components/MoviePage/Credits'

const MoviePage = () => {
  
  const [movie, setMovie] = useState()

  const { id } = useParams()

  useEffect(() => {
    const api_key = '8704d8b03cd654f0fc4c9c6d7534b85e'
    const url = `/movie/${id}`
    const options = {
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        language: 'es-MX',
        api_key
      }
    }
    axios.get(url, options)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err))
  }, [id])

  console.log(movie)

  return (
    <div>
      <HeroSection 
        movie={movie}
      />
      <Credits
        id={id}
      />
    </div>
  )
}

export default MoviePage