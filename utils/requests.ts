const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
	fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`,
	fetchPopularTVShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR`,
	fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
	fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
	fetchTopRatedTVShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=fr-FR`,
	fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=28`,
	fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`,
	fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`,
	fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`,
	fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=99`,
	fetchThrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`,
	fetchSciFiMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=878`,
	fetchDramaMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=18`,
	fetchAdventureMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=12`,
	fetchMysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=9648`,
	fetchFantasticMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=14`,
	fetchActionTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=28`,
	fetchComedyTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=35`,
	fetchHorrorTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=27`,
	fetchRomanceTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=10749`,
	fetchThrillerTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=53`,
	fetchSciFTVShowss: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=878`,
	fetchDramaTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=18`,
	fetchAdventureTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=12`,
	fetchMysteryTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=9648`,
	fetchFantasticTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=fr-FR&with_genres=14`,
};

export default requests;