import { Route, Routes } from 'react-router'
import HomePage from './routes/HomePage'
import MoviePage from './routes/MoviePage'
import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
    </div>
  )
}

export default App