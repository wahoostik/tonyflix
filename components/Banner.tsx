import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Movie } from '../typing';
import  { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

type Props = {
	bannerData: Movie[]
};

function Banner({bannerData}: Props) {

	const [movie, setMovie] = useState<Movie | null>(null);
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	useEffect(() => {
		setMovie(bannerData[Math.floor(Math.random() * bannerData.length)]);
	}, [bannerData]);

	const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

	return (
		<div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
			<div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
				<Image
					src={`${BASE_URL_IMAGE}${movie?.backdrop_path || movie?.poster_path}`}
					alt={movie?.title || movie?.name || movie?.original_name}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<h1 className='text-2xl font-bold md:text-4xl lg:text-6xl w-[95vw] text-shadow-md pr-20'>
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className='max-w-sm text-sm md:max-w-lg md:text-lg lg:max-w-4xl lg:text-xl text-shadow-md pr-5'>
				{movie?.overview}
			</p>
			<div className='flex space-x-3'>
				<button
					className='banner-button bg-white text-black'
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);}}>
					<FaPlay className='h-4 w-4 text-black md:h-7 md:w-7'/>Lecture</button>
				<button
					className='banner-button bg-[gray]/70'
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);}}>
					Informations
					<InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>
				</button>
			</div>
		</div>
	);
}

export default Banner;