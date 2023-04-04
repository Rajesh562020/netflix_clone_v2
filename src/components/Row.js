import React,{useState,useEffect} from 'react'
import axios from '../axios/axios.js'
import './row.css'
function Row({title,fetchUrl,isLargeRow = false}) {

  const[movies,setMovies] = useState([]);
  const base_Url = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    axios.get(fetchUrl).then((response)=>{
      //  console.log(response.data.results);
       setMovies(response.data.results);
    }).catch((error)=>console.log(error));
  },[fetchUrl]);
  // console.log(movies);


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_Posters'>
        {movies.map((item,i)=>{
          return(
          ((isLargeRow && item.poster_path) || (!isLargeRow && item.backdrop_path)) && (<div key={i}>
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_Url}${isLargeRow ? item.poster_path: item.backdrop_path}`} alt='movie_image'/>
            
            </div>)
          )
        })}
        </div>
    </div>
  )
}

export default Row