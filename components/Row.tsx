import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { DocumentData } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { Movie } from '../typing';
import Thumbnail from './Thumbnail';

type Props = {
    title: string
    // movies: Movie[]
	movies: Movie[] | DocumentData // Firebase
};

function Row({title, movies}: Props) {

	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = (direction: string) => {
		setIsMoved(true);

		if (rowRef.current) {
			const {scrollLeft, clientWidth} = rowRef.current;

			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

			// Défilement fluide pour le scrollbar
			rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});
		}

	};

	return (
		<div className='h-40 space-y-0.5 md:space-y-2'>
			<h2 className='w-80 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
			<div className='group relative md:-ml-2'>
				<ChevronLeftIcon
					className={`chevron-row left-2 ${!isMoved && 'hidden'}`}
					onClick={() => handleClick('left')}
				/>
				<div
					ref={rowRef}
					className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2'>
					{movies && movies.map((movie: Movie | DocumentData) => (
						<Thumbnail key={movie.id} movie={movie}/>
					))}
				</div>
				<ChevronRightIcon
					className='chevron-row right-2'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
}

export default Row;