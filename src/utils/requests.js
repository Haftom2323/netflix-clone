const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_network=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumetaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`
}

export default requests;