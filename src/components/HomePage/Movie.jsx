import { useEffect, useState } from 'react'
import movieStyle from './styles/Movie.module.css'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Movie = ({ movieInfo }) => {

  const [genres, setGenres] = useState()

  useEffect(() => {
    const api_key = '8704d8b03cd654f0fc4c9c6d7534b85e'
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=es-ES&api_key=${api_key}`
    axios.get(url)
      .then(res => setGenres(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/movie/${id}`)
  }

  return (
    <article onClick={() => handleClick(movieInfo.id)} className={movieStyle.movie}>
      <img className={movieStyle.poster} src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt="" />
      <div>
        <ul className={movieStyle.genres_container}>
          {
            movieInfo.genre_ids?.map(genreId => (
              <li className={movieStyle.genre} key={genreId}>
                {genres?.genres.find(e => e.id === genreId).name}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default Movie