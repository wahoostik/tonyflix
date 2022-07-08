import Head from 'next/head';
import Image from 'next/image';
import TLogo from '../public/tonyflix.png';
import Link from 'next/link';
import AccountImage from '../public/account3.png';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import Moment from 'moment';
import { MdSwitchAccount } from 'react-icons/md';
import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import payments, { goToBillingPortal } from '../lib/stripe';
import Membership from '../components/Membership';
import { useState } from 'react';

type Props = {
	products: Product[]
}

export const getStaticProps = async () => {
	try {
		const products = await getProducts(payments, {
			includePrices: true,
			activeOnly: true,
		});

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		console.trace(error);
	}
};

function Account({products}: Props) {
	console.log(products);
	
	const { user, logout } = useAuth();
	const subscription = useSubscription(user);

	const formatDateSubscription = Moment(subscription?.created).format('DD/MM/YYYY');

	const [isBillingLoading, setBillingLoading] = useState(false);

	const manageSubscription = () => {
		if (subscription) {
			setBillingLoading(true);
			goToBillingPortal();
		}
	};

	return (
		<div>
			<Head>
				<title>Tonyflix - Compte</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<div className='flex items-center space-x-2 md:space-x-10'>
					<Link href='/'>
						<Image
							src={TLogo}
							alt='Tonyflix Logo'
							width={150}
							height={50}
							className='cursor-pointer object-contain'/>
					</Link>
					<Link href='/'>
						<p className='nav-link'>Accueil</p>
					</Link>
				</div>
			</header>

			<main className='pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10'>
				<div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
					<h1 className='text-3xl md:text-4xl'>Votre compte</h1>
					<div className='-ml-0.5 flex items-center gap-x-1.5'>
						<MdSwitchAccount className='h-9 w-9 text-[#E50914]'/>
						<p className='ml-1 text-md font-semibold text-[#888]'>Membre depuis le {formatDateSubscription}</p>
					</div>
				</div>

				<Membership />

				<div className='accountRow'>
					<h4 className='uppercase'>Votre forfait</h4>
					<div className='col-span-2 font-medium'>
						{/* Pour chaque produit, on vérifie l'id de ce produit avec l'abonnement*/}
						{products.filter((product) => product.id === subscription?.product)[0]?.name}
					</div>
					<p
						className='membershipLink md:text-right'
						onClick={manageSubscription}>
							Changer d&apos;abonnement
					</p>
				</div>

				<div className='accountRow'>
					<h4 className='uppercase'>Paramètres</h4>
					<p className='membershipLink col-span-3' onClick={logout}>
						Se déconnecter de tous les appareils
					</p>
				</div>
			</main>
		</div>
	);
}

export default Account;