import Button from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

function Menu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className='md:!hidden'>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				className='!capitalize !text-white'
			>
			Menu
			</Button>
			<MuiMenu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				className='menu'
				MenuListProps={{'aria-labelledby': 'basic-button'}}
			>
				<Link href='/'><MenuItem onClick={handleClose}>Accueil</MenuItem></Link>
				<Link href='/tvshows'><MenuItem onClick={handleClose}>Séries</MenuItem></Link>
				<Link href='/movies'><MenuItem onClick={handleClose}>Films</MenuItem></Link>
				<Link href='/account'><MenuItem onClick={handleClose}>Mon compte</MenuItem></Link>
			</MuiMenu>
		</div>
	);
}

export default Menu;