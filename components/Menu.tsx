import Button from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Accueil</MenuItem>
				<MenuItem onClick={handleClose}>Séries</MenuItem>
				<MenuItem onClick={handleClose}>Films</MenuItem>
				<MenuItem onClick={handleClose}>Ma Liste</MenuItem>
			</MuiMenu>
		</div>
	);
}

export default Menu;