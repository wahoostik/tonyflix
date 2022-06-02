import Image from 'next/image';
import TLogo from '../public/tonyflix.png';
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
		<header className={`${isScrolled && 'bg-[#010511]'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Link href='/'>
					<Image
						src={TLogo}
						alt='Tonyflix Logo'
						width={150}
						height={50}
						className='cursor-pointer object-contain'/>
				</Link>
				<ul className='hidden space-x-4 md:flex text-shadow-md'>
					<Link href='/'>
						<li className='nav-link'>Accueil</li>
					</Link>
					<Link href='/tvshows'>
						<li className='nav-link'>Séries</li>
					</Link>
					<Link href='/movies'>
						<li className='nav-link'>Films</li>
					</Link>
					{/*<li className='nav-link'>Les Plus Populaires</li>*/}
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
							alt='Account Logo'
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