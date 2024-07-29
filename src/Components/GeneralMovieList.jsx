import React from 'react'
import { Suspense } from 'react';
import GenresList from '../Constant/GeneralsList'
import MovieList from './MovieList'
import { ShimmerFeaturedGallery } from "react-shimmer-effects";

function GenreMovieList() {
    
  function Loading() {
    return <ShimmerFeaturedGallery row={2} col={3} card frameHeight={300} className='shimercol' />;
  }

  return (
    <div>
        {GenresList.general.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
                <Suspense fallback={<Loading />}>
                 <MovieList genreId={item.input} index_={index} />  
                </Suspense>
                 
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList