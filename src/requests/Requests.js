const API_KEY = "2e04d83a4ada80273ba157858b1cf5c9";
const requests = {
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`, //working
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`, //working

    fetchTopRated:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`, //working link shown on top of application;
    
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`, //working link
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`, //working
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`, //working
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,//working
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`, //working
};
export default requests;