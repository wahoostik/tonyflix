import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { Movie } from '../typing';
import requests from '../utils/requests';

type Props = {
	netflixOriginals: Movie[],
	trendingNow: Movie[],
	topRated: Movie[],
	actionMovies: Movie[],
	comedyMovies: Movie[],
	horrorMovies: Movie[],
	romanceMovies: Movie[],
	documentaries: Movie[]
};

export const getServerSideProps = async () => {
	try {
		const [
			netflixOriginals,
			trendingNow,
			topRated,
			actionMovies,
			comedyMovies,
			horrorMovies,
			romanceMovies,
			documentaries,
		] = await Promise.all([
			fetch(requests.fetchNetflixOriginals).then((results) => results.json()),
			fetch(requests.fetchTrending).then((results) => results.json()),
			fetch(requests.fetchTopRated).then((results) => results.json()),
			fetch(requests.fetchActionMovies).then((results) => results.json()),
			fetch(requests.fetchComedyMovies).then((results) => results.json()),
			fetch(requests.fetchHorrorMovies).then((results) => results.json()),
			fetch(requests.fetchRomanceMovies).then((results) => results.json()),
			fetch(requests.fetchDocumentaries).then((results) => results.json()),
		]);
		return {
			props: {
				netflixOriginals: netflixOriginals.results,
				trendingNow: trendingNow.results,
				topRated: topRated.results,
				actionMovies: actionMovies.results,
				comedyMovies: comedyMovies.results,
				horrorMovies: horrorMovies.results,
				romanceMovies: romanceMovies.results,
				documentaries: documentaries.results,
			},
		};

	} catch (error) {
		console.trace(error);
	}
};

const Home = ({netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries}: Props) => {
	console.log('Résultat de la recherche Netflix : ', netflixOriginals);
	return (
		<div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
			<Head>
				<title>Tonyflix App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<Banner />
				<section>
					{/* Row */}
				</section>
			</main>
		</div>
	);
};

export default Home;
