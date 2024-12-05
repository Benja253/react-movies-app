import { useRef } from "react"
import style from './styles/Form.module.css'

const Form = ({ handleSelect, setPage, setSearchValue }) => {

  const searchInput = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setSearchValue(searchInput.current.value.toLowerCase())
    setPage(1)
    searchInput.current.value = ''
  }

  return (
    <div className={style.container}>
      <div>
        <select className={style.select} onChange={handleSelect} defaultValue='popular'>
          <option className={style.option} value="popular">Popular</option>
          <option className={style.option} value="top_rated">Top Rated</option>
          <option className={style.option} value="upcoming">Upcoming</option>
        </select>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.input} ref={searchInput} type="text" />
        <button className={style.btn}>Search</button>
      </form>
    </div>
  )
}

export default Form