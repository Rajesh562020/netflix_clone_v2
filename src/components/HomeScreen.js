import React from 'react'
import './homeScreen.css'
import Nav from './Nav.js'
import Banner from './Banner.js'
import requests from '../requests/Requests.js'
import Row from './Row.js'
export default function HomeScreen() {
  return (
    <div className='homeScreen'>
        
    {/* Nav     */}
    <Nav/>
    

    {/* Banner */}

    <Banner/>  
    
     
    {/* Rows */}

    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow="true"/> 
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> 
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 
        
    </div>
  )
}
