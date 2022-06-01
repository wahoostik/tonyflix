import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import { Movie } from '../typing';
import requests from '../utils/requests';

type Props = {
	popularMovies: Movie[],
	topRatedMovies: Movie[],
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
			popularMovies,
			topRatedMovies,
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
			fetch(requests.fetchPopularMovies).then((results) => results.json()),
			fetch(requests.fetchTopRatedMovies).then((results) => results.json()),
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
				popularMovies: popularMovies.results,
				topRatedMovies: topRatedMovies.results,
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

function movies({
	popularMovies,
	topRatedMovies,
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
}: Props) {
	return (
		<div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
			<Head>
				<title>Tonyflix - Films</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
				<Banner bannerData={popularMovies} />
				<section className='md:space-y-24'>
					<Row title='Populaires' movies={popularMovies}/>
					<Row title='Les mieux notés' movies={topRatedMovies}/>
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
}

export default movies;