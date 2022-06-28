import Image from 'next/image';
import TLogo from '../public/tonyflix.png';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import { XCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import AccountImage from '../public/account3.png';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Menu from './Menu';


function Header() {

	const [isScrolled, setIsScrolled] = useState(false);
	const { logout } = useAuth();

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

				<Menu />
				
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
					<li className='nav-link'>Ma Liste</li>
				</ul>
			</div>
			<div className='flex items-center space-x-4 text-base font-medium'>
				<Link href='/search'>
					<SearchIcon className='hidden h-6 w-6 sm:inline cursor-pointer transition duration-[.5s] hover:text-[#e50914]' />
				</Link>
				<p className='hidden lg:inline'>Kids</p>
				<BellIcon className='h-6 w-6' />
				<div className='space-x-4'>
					<Link href='/account'>
						<Image src={AccountImage}
							alt='Account Logo'
							width={50}
							height={50}
							className='cursor-pointer rounded'/>
					</Link>
				</div>
				<Link href='/login'>
					<XCircleIcon className='h-8 w-8 cursor-pointer transition duration-[.5s] hover:text-[#e50914]' onClick={logout}/>
				</Link>
			</div>
		</header>
	);
}

export default Header;