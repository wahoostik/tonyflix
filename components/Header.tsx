/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import TLogo from '../public/Tonyflix.png';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Account from '../public/account3.png';


function Header() {
	return (
		<header>
			<div className='flex items-center space-x-2 md:space-x-10'>
				{/* width={150} height={100} */}
				<Image src={TLogo}
					alt="Tonyflix Logo"
					width={150}
					height={50}
					className='cursor-pointer object-contain'/>
				<ul className='hidden space-x-4 md:flex'>
					<li className='nav-link'>Home</li>
					<li className='nav-link'>TV Shows</li>
					<li className='nav-link'>Movies</li>
					<li className='nav-link'>Popular</li>
					<li className='nav-link'>My List</li>
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