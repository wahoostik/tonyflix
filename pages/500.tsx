import Head from 'next/head';
import Header from '../components/Header';

function Custom500() {
	return (
		<div>
			<Head>
				<title>Tonyflix - Erreur 500</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<h1 className='text-center w-screen py-36'>500 - Server-side error occurred</h1>
		</div>
	);
}

export default Custom500;