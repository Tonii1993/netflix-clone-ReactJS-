// store bunch of endpoints:

const apiKey = 'e6f3ccbd1110b00d4697ea71d1c5701f';

// const apiRequest = 'https://api.themoviedb.org/3/movie/550?api_key=e6f3ccbd1110b00d4697ea71d1c5701f';

const requests = {
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorrMovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;