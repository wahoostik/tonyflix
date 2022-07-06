import { useEffect, useState } from 'react';

function Error() {

	const [error, setError] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('Désolé, il y a un soucis avec Youtube :(');
			setError('Désolé, il n\'y a pas de vidéo disponible :(');
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<button>{error}</button>
	);
}

export default Error;