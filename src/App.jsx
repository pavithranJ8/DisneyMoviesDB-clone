import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/slider'
import ProductionHouse from './Components/productionHouse'
import GenreMovieList from './Components/GeneralMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <Header />
    <Slider />

    <ProductionHouse/>
    <GenreMovieList />

    </div>
  )
}

export default App
