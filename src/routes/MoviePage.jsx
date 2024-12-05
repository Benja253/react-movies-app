import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import style from './style/MoviePage.module.css'

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

  const styleObj = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie?.backdrop_path}')`
  }

  return (
    <div>
      <div className={style.hero} style={styleObj}>
        <section className={style.hero_int}>
          <header>
            <img className={style.image} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
          </header>
          <article>
            <h2>{movie?.title} <span>({movie?.release_date && (new Date(movie?.release_date)).getFullYear()})</span></h2>
            <section>
              <h3>{} certificación</h3>
              <ul>
                {
                  movie?.genres.map(genreInfo => (
                    <li key={genreInfo.id}>{genreInfo.name}</li>
                  ))
                }
              </ul>
            </section>
          </article>
        </section>
      </div>
    </div>
  )
}

export default MoviePage