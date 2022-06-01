const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
	fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
	fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
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
};

export default requests;