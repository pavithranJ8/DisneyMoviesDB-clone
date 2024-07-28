// import React from 'react'
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/shows',
    headers: {
      'x-rapidapi-key': 'a0161aab42mshd484584a894e785p10e177jsn2e1ac39bbf38',
      'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
  };

// function GlobalApi() {

    const movieBaseURL = axios.request(options);

    const getMovieByGenreId=(src)=> {
      // console.log(src,'src55555')
      const optionsss = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/search',
        params: {
          query: src
        },
        headers: {
          'x-rapidapi-key': 'a0161aab42mshd484584a894e785p10e177jsn2e1ac39bbf38',
          'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
        }
      };

      // console.log(optionsss,'optionsss')

      return axios.request(optionsss);
    }
   
    
    // async() => {
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

    // const getmovielist = useEffect(() => {
    //     movieBaseURL()
    //   }, [])

//   return (
//     <div>
//       {getmovielist}
//     </div>
//   )
// }

// export default GlobalApi

export default {
    movieBaseURL,
    getMovieByGenreId
  }
