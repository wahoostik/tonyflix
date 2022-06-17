import { CheckIcon } from '@heroicons/react/outline';
import {  Product } from '@stripe/firestore-stripe-payments';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import TLogo from '../public/tonyflix.png';
import Table from './Table';

type Props = {
	products: Product[]
}

function Plans({ products }: Props) {

	const { logout } = useAuth();
	const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]); // Sélection du 3e abonnement par défaut
	const [isBillingLoading, setBillingLoading] = useState(false); // Chargement de la facturation

	return (
		<div>
			<Head>
				<title>Tonyflix - Forfait/Abonnement</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='border-b border-white/40 bg-[#010511]'>
				<Link href='/'>
					<Image
						src={TLogo}
						alt='Tonyflix Logo'
						width={180}
						height={60}
						className='cursor-pointer object-contain'/>
				</Link>
				<button
					className='text-xl font-medium hover:underline'
					onClick={logout}>
                    Se déconnecter
				</button>
			</header>

			<main className='mx-auto max-w-5xl px-5 pt-36 pb-12 transition-all md:px-10'>
				<h1 className='mb-5 text-3xl font-medium'>Sélectionnez le forfait qui vous convient.</h1>
				<ul className='mb-14'>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Regardez autant que vous voulez. Sans publicité.
					</li>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations personnalisées.
					</li>
					<li className="flex items-center gap-x-2 text-lg">
						<CheckIcon className="h-7 w-7 text-[#E50914]" /> Changez ou annulez votre forfait à tout moment.
					</li>
				</ul>

				<div className='mt-4 flex flex-col space-y-4'>
					<div className='flex w-full items-center justify-center self-end md:w-3/5'>
						{products.map((product) => (
							<div
								key={product.id}
								className={`planBox ${selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'}`}
								onClick={() => setSelectedPlan(product)}>
								{product.name}
							</div>
						))}
					</div>
					<Table products={products} selectedPlan={selectedPlan}/>
					<button
						className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${isBillingLoading && 'opacity-60'}`}
						disabled={!selectedPlan || isBillingLoading}>
						Inscription
					</button>
				</div>

			</main>
		</div>
	);
}

export default Plans;