import style from './styles/Person.module.css'

const Person = ({ infoPerson }) => {
  return (
    <article className={style.container}>
      <header className={style.header}>
        <img 
          className={style.image}
          src={infoPerson.profile_path ? `https://image.tmdb.org/t/p/w500${infoPerson.profile_path}` : '/user_photo.png'}alt="" />
      </header>
      <article className={style.body}>
        <h3 className={style.name}>{infoPerson.name}</h3>
        <h4 className={style.mote}>{infoPerson.character}</h4>
      </article>
    </article>
  )
}

export default Person