const api_key = process.env.PUBLIC_NEXT_APP_TMDB_API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${api_key}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${api_key}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${api_key}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${api_key}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${api_key}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${api_key}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${api_key}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${api_key}&with_genres=10770`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${api_key}&with_genres=99`,
  },
};
