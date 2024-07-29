import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import Loader from './Loader';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import { ShimmerText } from "react-shimmer-effects";



function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const [Loading, setLoading] = useState(false)
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        // console.log(genreId,'genreId')
        // console.log( GlobalApi.getMovieByGenreId(genreId),'genreId5646496596859')
        setLoading(true);
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.contents,'2652656')
            setMovieList(resp.data.contents)
            setLoading(false);
        }).catch(err => {
            console.log(err,'error')
            setLoading(false);
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div>
        {!Loading && <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>}

    {Loading &&  <ShimmerText line={10} gap={10} />}
    </div>
    
  )
}

export default MovieList