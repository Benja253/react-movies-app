import style from './styles/HeroSection.module.css'

const HeroSection = ({ movie }) => {

  const styleObj = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie?.backdrop_path}')`
  }

  return (
    <div className={style.hero} style={styleObj}>
      <section className={style.hero_int}>
        <header>
          <img className={style.image} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
        </header>
        <article className={style.info}>
          <h2 className={style.title}>{movie?.title} <span className={style.year}>({movie?.release_date && (new Date(movie?.release_date)).getFullYear()})</span></h2>
          <ul className={style.genre_container}>
            {
              movie?.genres.map(genreInfo => (
                <li className={style.genre} key={genreInfo.id}>{genreInfo.name}</li>
              ))
            }
          </ul>
          <section className={style.time}>
            {`${Math.floor(movie?.runtime / 60)}h ${movie?.runtime % 60}m`}
          </section>
          <section className={style.description_container}>
            <h3 className={style.description_title}>Descripción general</h3>
            <p className={style.description}>{movie?.overview}</p>
          </section>
          <section className={style.rating_container}>
            <div className={style.rating_star}>⭐️</div>
            <div className={style.rating}>{movie?.vote_average}</div>
          </section>
        </article>
      </section>
    </div>
  )
}

export default HeroSection