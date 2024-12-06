import { useEffect, useState } from 'react'
import style from './styles/Credits.module.css'
import axios from 'axios'
import Person from './Person'

const Credits = ({ id }) => {

  const [credits, setCredits] = useState()

  useEffect(() => {
    const api_key = '8704d8b03cd654f0fc4c9c6d7534b85e'
    const options = {
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        language: 'es-MX',
        api_key
      }
    }
    const url = `/movie/${id}/credits`
    axios.get(url, options)
      .then(res => setCredits(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <section className={style.container}>
      <h2 className={style.title}>Reparto principal</h2>
      <div className={style.credit_container}>
        {
          credits?.cast.map(infoPerson => (
            <Person
              key={infoPerson.cast_id} 
              infoPerson={infoPerson}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Credits