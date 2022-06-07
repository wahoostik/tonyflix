import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Movie } from '../typing';

type Props = {
	movie: Movie
};

function Thumbnail({movie}: Props) {

	const BASE_URL_IMAGE_THUMBNAIL = process.env.NEXT_PUBLIC_API_IMAGE_THUMBNAIL;
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
			onClick={() => {
				setCurrentMovie(movie);
				setShowModal(true);
			}}>
			<Image
				src={`${BASE_URL_IMAGE_THUMBNAIL}${movie?.backdrop_path || movie?.poster_path}`}
				alt={movie?.title || movie?.name || movie?.original_name}
				layout='fill'
				className='rounded-sm object-cover md:rounded'
			/>
		</div>
	);
}

export default Thumbnail;