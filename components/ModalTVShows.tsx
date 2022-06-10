import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from '@heroicons/react/outline';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Element, Genre } from '../typing';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from 'react-icons/fa';
import Error from './Error';

function ModalTVShows() {
	
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [movie, setMovie] = useRecoilState(movieState);
	const [trailer, setTrailer] = useState('');
	const [genres, setGenres] = useState<Genre[]>([]);
	const [muted, setMuted] = useState(false);
	const [playing, setPlaying] = useState(false);
	
	useEffect(() => {
		if(!movie) return;

		const fetchVideoTVShow = async () => {
			try {
				const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
				const data = await fetch(`https://api.themoviedb.org/3/tv/${movie?.id}?api_key=${API_KEY}
				&language=fr-FR&append_to_response=videos`);
				const response = await data.json();
				console.log('Video Fetch TVShows : ', response);

				if (response?.videos) {
					const index = response.videos.results.findIndex((element: Element) => element.type === 'Trailer');
					setTrailer(response.videos?.results[index]?.key);
				}

				if (response?.genres) {
					setGenres(response.genres);
				}

			} catch (error) {
				console.trace(error);
			}
		};

		fetchVideoTVShow();
	}, [movie]);
	
	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<MuiModal
			open={showModal}
			onClose={handleClose}
			BackdropProps={{timeout: 1000}}
			className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'>
			<div>
				<button
					onClick={handleClose}
					className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
					<XIcon className='h-6 w-6"'/>
				</button>
				<div className='relative pt-[56.25%]'>
					{!trailer && <button className='absolute inset-0 sm:text-xl vsm:text-sm'><Error /></button>}
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width="100%"
						height="100%"
						style={{ position: 'absolute', top: '0', left: '0' }}
						playing={playing}
						muted={muted}/>
					<div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
						<div className='flex space-x-2'>
							<button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]'>
								<FaPlay className='h-7 w-7 text-black' />
							Lecture
							</button>
							<button className='modalButton'>
								<PlusIcon className='h-7 w-7' />
							</button>
							<button className='modalButton'>
								<ThumbUpIcon className='h-7 w-7' />
							</button>
							<button className='modalButton' onClick={() => setMuted(!muted)}>
								{muted ? ( <VolumeOffIcon className='h-6 w-6' /> ) : ( <VolumeUpIcon className='h-6 w-6' /> )}
							</button>
						</div>
					</div>
				</div>

				<div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-5'>
					<div className='space-y-4 text-lg'>
						<div className='font-semibold text-xl'>
							{movie?.name || movie?.title}
						</div>
						<div className='flex items-center space-x-2 text-md'>
							<p className='font-semibold text-green-400'>Recommandé à {movie!.vote_average * 10} % </p>
							<p className='font-light'>{movie?.release_date || movie?.first_air_date}</p>
							<div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">HD</div>
						</div>

						<div className='flex flex-col gap-x-10 gap-y-4 md:flex-row'>
							<p className="w-5/6">{movie?.overview}</p>
						</div>
						<div className='flex flex-col space-y-3 text-md'>
							<div>
								<span className='text-gray-400'>Genres : </span>
								{genres.map((genre) => genre.name).join(', ')}
							</div>

							<div className='capitalize'>
								<span className='text-gray-400 normal-case'>Langue originale : </span>
								{movie?.original_language}
							</div>

							<div>
								<span className='text-gray-400'>Total des votes : </span>
								{movie?.vote_count}
							</div>
						</div>
					</div>
				</div>
			</div>
		</MuiModal>
	);
}

export default ModalTVShows;