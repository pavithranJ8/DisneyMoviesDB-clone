

import React from 'react'
import logo from '../assets/images/disney.png'
import profile from '../assets/images/profile.png'
import { HiHome, HiStar, HiTv, HiPlayCircle, HiMagnifyingGlass} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';
import { useState, useEffect } from 'react'
import axios from "axios";

function Header() {
   
//   const movieBaseURL = async() => {
//     // const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
//     const options = {
//       method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//   headers: {
//     'x-rapidapi-key': 'a0161aab42mshd484584a894e785p10e177jsn2e1ac39bbf38',
//     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
//     };
    
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
// }
  // {
  //   method: 'GET',
  // hostname: 'disney-worlds.p.rapidapi.com',
  // port: null,
  // path: '/latestmovie',
  // headers: {
  //   'x-rapidapi-key': 'a0161aab42mshd484584a894e785p10e177jsn2e1ac39bbf38',
  //   'x-rapidapi-host': 'disney-worlds.p.rapidapi.com'
  // }
  // }

    //  useEffect(() => {
    //   movieBaseURL()
    // }, [])
   
  const [toggle, setToggle] = useState(false);
  const menu= [
    {
      name: 'HOME',
      icon:HiHome
    },
    {
      name: 'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon:HiPlus
    },
    {
      name: 'ORIGINALS',
      icon:HiStar
    },
    {
      name: 'MOVIES',
      icon:HiPlayCircle
    },
    {
      name: 'SERIES',
      icon:HiTv
    },
  ]
  return (
    <div className='flex justify-between p-5'>
      <div className='flex items-center gap-8'>
       <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

       <div className='hidden md:flex gap-8'>
       {menu.map((item,index) => (
        <Headeritem name={item.name} Icon={item.icon} />
       ))}
       </div>

       <div className='flex md:hidden gap-5'>
       {menu.map((item, index) => index<3 && (
        <Headeritem name={''} Icon={item.icon} />
       ))}
       <div className='md:hidden' onClick={() => setToggle(!toggle)}> <Headeritem name={''} Icon={HiDotsVertical} />
       {toggle ?  <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
       {menu.map((item, index) => index>2 && (
        <Headeritem name={item.name} Icon={item.icon} />
       ))}
       </div> : null}
       </div>
       </div>

       </div>
       <img src={profile} className='w-[40px] h-[40px] rounded-full'/>
    </div>
  )
}

export default Header
