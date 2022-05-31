import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Movie } from '../typing';

type Props = {
	netflixOriginals: Movie[]
};

function Banner({netflixOriginals}: Props) {

	const [movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
	}, [netflixOriginals]);

	console.log('Résultat au hasard : ', movie);

	const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

	return (
		<div>
			<div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
				<Image
					src={`${BASE_URL_IMAGE}${movie?.backdrop_path || movie?.poster_path}`}
					alt={movie?.title || movie?.name || movie?.original_name}
					layout='fill'
					objectFit="cover"
				/>
			</div>

			<h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
		</div>
	);
}

export default Banner;