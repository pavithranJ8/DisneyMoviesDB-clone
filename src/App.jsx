import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/slider'
import ProductionHouse from './Components/productionHouse'
import GenreMovieList from './Components/GeneralMovieList'
import { ShimmerText } from "react-shimmer-effects";
import { Suspense } from 'react';

function App() {

  function Loading() {
    return <ShimmerText line={15} gap={10} />;
  }

  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <Header />
    <Suspense fallback={<Loading />}>
        <Slider />
    </Suspense>

    <ProductionHouse/>
    <GenreMovieList />

    </div>
  )
}

export default App
