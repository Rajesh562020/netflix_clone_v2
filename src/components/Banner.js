import React,{useState,useEffect} from 'react'
import './banner.css'
import axios from '../axios/axios.js';
import requests from '../requests/Requests.js';
function Banner() {
  const [movie,setMovie] = useState([]);


   useEffect(()=>{
    // for generating random movie 

   axios.get(requests.fetchTopRated).then((response)=>{

    //  console.log(response.data.results);

     setMovie(response.data.results[Math.floor(Math.random() * 20)]);
     
   }).catch((error)=>console.log(error));

    
   },[]);

        // console.log(movie);



    function truncate(string,n){
    // "string?.length > n"  for checking the string is present and length of string is greater than n; 

      return string?.length > n ? string.substr(0,n-1)+ '...' : string;
    }
  return (
    <header className='banner'
    style={{
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 100%",
        backgroundPosition:"top center",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       
      
    }}
    >
    
     <div className='banner_contents'>
        <div className='banner_container'>

        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.orginal_name}</h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(`${movie?.overview}`,150)}</h1>
        </div>
     </div>

      <div className='banner_fadeBottom'/>
    </header>
  )
}

export default Banner