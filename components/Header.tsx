/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import TLogo from '../public/Tonyflix.png';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Account from '../public/account3.png';
import { useEffect, useState } from 'react';


function Header() {

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		// On nettoie la fonction
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && 'bg-slate-900'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				{/* width={150} height={100} */}
				<Image src={TLogo}
					alt="Tonyflix Logo"
					width={150}
					height={50}
					className='cursor-pointer object-contain'/>
				<ul className='hidden space-x-4 md:flex'>
					<li className='nav-link'>Accueil</li>
					<li className='nav-link'>Séries</li>
					<li className='nav-link'>Films</li>
					<li className='nav-link'>Les Plus Populaires</li>
					<li className='nav-link'>Ma Liste</li>
				</ul>
			</div>
			<div className='flex items-center space-x-4 text-base font-medium'>
				<SearchIcon className='hidden h-6 w-6 sm:inline' />
				<p className='hidden lg:inline'>Kids</p>
				<BellIcon className='h-6 w-6' />
				<div className='space-x-4'>
					<Link href='/account'>
						<Image src={Account}
							alt="Account Logo"
							width={50}
							height={50}
							className='cursor-pointer rounded'/>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;