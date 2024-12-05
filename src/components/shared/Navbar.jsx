import style from './styles/Navbar.module.css'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner_int}>
        <h1 className={style.title}>
          <Link to='/'>React-movies</Link>
        </h1>
      </div>
    </div>
  )
}

export default Navbar