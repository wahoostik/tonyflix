import Image from 'next/image';
import TLogo from '../public/Tonyflix.png';


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
			<div>Header</div>
		</header>
	);
}

export default Header;