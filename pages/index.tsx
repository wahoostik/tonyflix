import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import { Movie } from '../typing';
import requests from '../utils/requests';

type Props = {
	netflixOriginals: Movie[],
	trendingNow: Movie[],
	topRatedMovies: Movie[],
	topRatedTVShows: Movie[],
	popularMovies: Movie[],
	popularTVShows: Movie[],
};

export const getServerSideProps = async () => {
	try {
		const [
			netflixOriginals,
			trendingNow,
			topRatedMovies,
			topRatedTVShows,
			popularMovies,
			popularTVShows
		] = await Promise.all([
			fetch(requests.fetchNetflixOriginals).then((results) => results.json()),
			fetch(requests.fetchTrending).then((results) => results.json()),
			fetch(requests.fetchTopRatedMovies).then((results) => results.json()),
			fetch(requests.fetchTopRatedTVShows).then((results) => results.json()),
			fetch(requests.fetchPopularMovies).then((results) => results.json()),
			fetch(requests.fetchPopularTVShows).then((results) => results.json()),
		]);
		return {
			props: {
				netflixOriginals: netflixOriginals.results,
				trendingNow: trendingNow.results,
				topRatedMovies: topRatedMovies.results,
				topRatedTVShows: topRatedTVShows.results,
				popularMovies: popularMovies.results,
				popularTVShows: popularTVShows.results,
			},
		};

	} catch (error) {
		console.trace(error);
	}
};

const Home = ({
	netflixOriginals,
	trendingNow,
	topRatedMovies,
	topRatedTVShows,
	popularMovies,
	popularTVShows
}: Props) => {
	console.log('Résultat de la recherche Netflix : ', netflixOriginals);
	return (
		<div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
			<Head>
				<title>Tonyflix - Accueil</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
				<Banner bannerData={trendingNow} />
				<section className='md:space-y-24'>
					<Row title='Tendances actuelles' movies={trendingNow}/>
					<Row title='Films les mieux notés' movies={topRatedMovies}/>
					<Row title='Films populaires' movies={popularMovies}/>
					<Row title='Séries les mieux notés' movies={topRatedTVShows}/>
					<Row title='Séries populaires' movies={popularTVShows}/>
				</section>
			</main>
		</div>
	);
};

export default Home;
