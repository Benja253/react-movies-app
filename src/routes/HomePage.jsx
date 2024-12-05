import { useEffect, useState } from 'react'
import appStyle from './style/HomePage.module.css'
import axios from 'axios'
import { Form, Loading, Movie, Pagination } from '../components/HomePage'

const HomePage = () => {

  const [movies, setMovies] = useState()
  const [page, setPage] = useState(1)
  const [typeMovies, setTypeMovies] = useState('popular')
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const api_key = '8704d8b03cd654f0fc4c9c6d7534b85e'
    const options = {
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        query: searchValue,
        language: 'es-MX',
        page,
        api_key
      }
    }
    const url = searchValue ? '/search/movie' : `/movie/${typeMovies}`
    setIsLoading(true)
    axios.get(url, options)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, [page, typeMovies, searchValue])

  const handleSelect = (e) => {
    setTypeMovies(e.target.value)
    setPage(1)
    setSearchValue('')
  }

  console.log(movies)

  return (
    <div className={appStyle.app}>
      <Form
        handleSelect={handleSelect}
        setPage={setPage}
        setSearchValue={setSearchValue}
      />
      <Pagination 
        totalPages={movies?.total_pages}
        page={page}
        setPage={setPage}
      />
      <div className={appStyle.movies_container}>
        {
          isLoading
            ? <Loading />
            : (
                movies?.results.length === 0
                ? (
                  <h3>😵 No hay resultados para la búsqueda.</h3>
                )
                : (
                  movies?.results.map(movieInfo => (
                    <Movie
                      key={movieInfo.id}
                      movieInfo={movieInfo}
                    />
                  ))
                )
              )
        }
      </div>
    </div>
  )
}

export default HomePage