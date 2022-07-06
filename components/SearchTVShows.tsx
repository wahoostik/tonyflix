import { SearchIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Row from './Row';

function SearchTVShows() {
	const [searchText, setSearchText] = useState('');
	const [contentTVShow, setContentTVShow] = useState([]);

	useEffect(() => {

		const searchTVShow = async () => {
			try {
				const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
				const dataTVShow = await fetch(`https://api.themoviedb.org/3/search/tv/?api_key=${API_KEY}&language=fr-FR&query=${searchText}&include_adult=false`);
				const response = await dataTVShow.json();
				setContentTVShow(response.results);
				console.log(response.results);
				
			} catch (error) {
				console.trace(error);
			}
		};

		searchTVShow();
	},[searchText]);
	
	return (
		<div className='space-y-6 animate-fade-in-down-with-opacity'>
			<div className='lg:px-56 md:px-32 vsm:px-24'>
				<form>
					<div className='relative mb-10 vsm:mt-5'>
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<SearchIcon className='h-5 w-5' />
						</div>
						<input
							className='block p-4 pl-10 w-full text-sm text-white bg-gray-900 rounded-lg border
							border-gray-300 focus:ring-[#E50914] focus:border-[#E50914] placeholder-white lg:h-14 md:h-14 vsm:h-10'
							type="text"
							placeholder="Entrer le titre d'une série"
							onChange={(event) => setSearchText(event.target.value)}
						/>
					</div>
				</form>
			</div>
			<div>
				{searchText && contentTVShow && <Row title='Résultat de votre recherche' movies={contentTVShow}/>}
			</div>
		</div>
	);
}

export default SearchTVShows;