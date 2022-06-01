import Image from 'next/image';
import { Movie } from '../typing';

type Props = {
	movie: Movie
};

function Thumbnail({movie}: Props) {

	const BASE_URL_IMAGE_THUMBNAIL = process.env.BASE_URL_IMAGE_THUMBNAIL;
	const BASE_URL = 'https://image.tmdb.org/t/p/w500';

	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
			<Image
				src={`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
				alt={movie?.title || movie?.name || movie?.original_name}
				layout='fill'
				className='rounded-sm object-cover md:rounded'
			/>
		</div>
	);
}

export default Thumbnail;