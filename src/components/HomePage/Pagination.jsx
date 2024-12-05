import { useEffect, useState } from "react"
import style from './styles/Pagination.module.css'

const Pagination = ({ totalPages, page, setPage }) => {

  const [block, setBlock] = useState(1)
  let perBlock = 5
  let visiblePages = block * perBlock > totalPages ? totalPages % perBlock : perBlock

  let numbers = []
  let first = (block - 1) * perBlock + 1
  for (let i = first ; i < first + visiblePages; i++) {
    numbers.push(i)
  }

  useEffect(() => {
    setBlock(e =>  Math.ceil(page / perBlock))
  }, [page])

  const handlePrev = () => setPage(e => e > 1 ? e - 1 : e)

  const handleNext = () => setPage(e => e < totalPages ? e + 1 : e)

  const handlePrevBlock = () => {
    setPage(block > 1 ? (block - 1) * perBlock : 1)
  }

  const handleNextBlock = () => {
    const newPage = block * perBlock + 1
    setPage(newPage <= totalPages ? newPage : page)
  }

  if(totalPages === 1) {
    return 
  }

  return (
    <div className={style.container}>
      <div onClick={handlePrev} className={style.button}>&lt;</div>
      <div onClick={handlePrevBlock} className={`${style.button} ${style.button_special}`}>«</div>
      <ul className={style.list}>
        {
          numbers.map(num => (
            <li
              onClick={() => setPage(num)}
              className={`${style.page} ${num === page && style.active_page}`} 
              key={num}
            >
              {num}
            </li>
          ))
        }
      </ul>
      <div onClick={handleNextBlock} className={`${style.button} ${style.button_special}`}>»</div>
      <div onClick={handleNext} className={style.button}>&gt;</div>
    </div>
  )
}

export default Pagination