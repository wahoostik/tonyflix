import { XIcon } from '@heroicons/react/outline';
import MuiModal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Element, Genre } from '../typing';
import ReactPlayer from 'react-player/lazy';

function Modal() {
	
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [movie, setMovie] = useRecoilState(movieState);
	const [trailer, setTrailer] = useState('');
	const [genre, setGenre] = useState<Genre[]>([]);
	const [muted, setMuted] = useState(false);
	const [playing, setPlaying] = useState(false);
	
	useEffect(() => {
		if(!movie) return;
		
		const fetchVideo = async () => {
			try {
				const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
				const data = await fetch(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${API_KEY}
				&language=fr-FR&append_to_response=videos`);
				const response = await data.json();
				console.log('VideoFetch : ' , response);

				if (response?.videos) {
					const index = response.videos.results.findIndex((element: Element) => element.type === 'Trailer');
					setTrailer(response.videos?.results[index]?.key);
				}

				if (response?.genre) {
					setGenre(response.genre);
				}

			} catch (error) {
				console.trace(error);
			}
		};
		fetchVideo();
	}, [movie]);	
	
	const handleClose = () => {
		setShowModal(false);
	};
	
	return (
		<MuiModal
			open={showModal}
			onClose={handleClose}>
			<div>
				<button
					onClick={handleClose}
					className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
					<XIcon className='h-6 w-6"'/>
				</button>
				<div>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width="100%"
						height="100%"
						style={{ position: 'absolute', top: '0', left: '0' }}
						playing={playing}
						muted={muted}/>
				</div>
			</div>
		</MuiModal>
	);
}

export default Modal;