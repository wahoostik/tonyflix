import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
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
	documentaries: Movie[],
	thrillerMovies: Movie[],
	sciFiMovies: Movie[],
	dramaMovies: Movie[],
	adventureMovies: Movie[],
	mysteryMovies: Movie[],
	fantasticMovies: Movie[],
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
			thrillerMovies,
			sciFiMovies,
			dramaMovies,
			adventureMovies,
			mysteryMovies,
			fantasticMovies
		] = await Promise.all([
			fetch(requests.fetchNetflixOriginals).then((results) => results.json()),
			fetch(requests.fetchTrending).then((results) => results.json()),
			fetch(requests.fetchTopRated).then((results) => results.json()),
			fetch(requests.fetchActionMovies).then((results) => results.json()),
			fetch(requests.fetchComedyMovies).then((results) => results.json()),
			fetch(requests.fetchHorrorMovies).then((results) => results.json()),
			fetch(requests.fetchRomanceMovies).then((results) => results.json()),
			fetch(requests.fetchDocumentaries).then((results) => results.json()),
			fetch(requests.fetchThrillerMovies).then((results) => results.json()),
			fetch(requests.fetchSciFiMovies).then((results) => results.json()),
			fetch(requests.fetchDramaMovies).then((results) => results.json()),
			fetch(requests.fetchAdventureMovies).then((results) => results.json()),
			fetch(requests.fetchMysteryMovies).then((results) => results.json()),
			fetch(requests.fetchFantasticMovies).then((results) => results.json()),
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
				thrillerMovies: thrillerMovies.results,
				sciFiMovies: sciFiMovies.results,
				dramaMovies: dramaMovies.results,
				adventureMovies: adventureMovies.results,
				mysteryMovies: mysteryMovies.results,
				fantasticMovies: fantasticMovies.results,
			},
		};

	} catch (error) {
		console.trace(error);
	}
};

const Home = ({
	netflixOriginals,
	trendingNow,
	topRated,
	actionMovies,
	comedyMovies,
	horrorMovies,
	romanceMovies,
	documentaries,
	thrillerMovies,
	sciFiMovies,
	dramaMovies,
	adventureMovies,
	mysteryMovies,
	fantasticMovies
}: Props) => {
	console.log('Résultat de la recherche Netflix : ', netflixOriginals);
	return (
		<div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
			<Head>
				<title>Tonyflix App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
				<Banner netflixOriginals={netflixOriginals} />
				<section className='md:space-y-24'>
					<Row title='Populaires' movies={trendingNow}/>
					<Row title='Les mieux notés' movies={topRated}/>
					<Row title='Action' movies={actionMovies}/>
					<Row title='Thriller' movies={thrillerMovies}/>
					<Row title='Science-Fiction' movies={sciFiMovies}/>
					<Row title='Drame' movies={dramaMovies}/>
					<Row title='Aventure' movies={adventureMovies}/>
					<Row title='Fantastique' movies={fantasticMovies}/>
					<Row title='Comédie' movies={comedyMovies}/>
					<Row title='Mystère' movies={mysteryMovies}/>
					<Row title='Horreur' movies={horrorMovies}/>
					<Row title='Romance' movies={romanceMovies}/>
					<Row title='Documentaire' movies={documentaries}/>
				</section>
			</main>
		</div>
	);
};

export default Home;
