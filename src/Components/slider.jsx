import React from 'react'
import { useState, useEffect, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronLeft, HiOutlineChevronRight  } from "react-icons/hi";
const screenWidth=window.innerWidth;
function slider() {
   const [Movielist, setMovielist] = useState([])
   const elementRef = useRef();
   useEffect(() => {
    getmovielist();
}, [])

        const getmovielist = () => {
        GlobalApi.movieBaseURL.then(response => {
        console.log(response,'res')
        setMovielist(response.data.movies)
        }) 
        }
        const sliderRight=(element)=>{
            element.scrollLeft+=screenWidth-110
        }
        const sliderLeft=(element)=>{
            element.scrollLeft-=screenWidth-110
        }

  return (
    <div> 
        <HiOutlineChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]' onClick={() => sliderLeft(elementRef.current)} />
        <HiOutlineChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0' onClick={()=>sliderRight(elementRef.current)} />
    <div className='flex overflow-x-auto w-full px-16 py-14 scrollbar-none pt-0' ref={elementRef}>
      {Movielist.map((item, index) => 
        <img src={item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
      )}
    </div>
    </div>
  )
}

export default slider
