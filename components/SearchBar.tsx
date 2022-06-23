function SearchBar() {
	return (
		<div className='pt-24 lg:px-56 vsm:min-w-full'>
			<form>   
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Rechercher</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-white dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
							</path>
						</svg>
					</div>
					<input
						type="search" id="default-search"
						className="block p-4 pl-10 w-full text-sm text-white bg-gray-900 rounded-lg border border-gray-300 focus:ring-[#E50914] focus:border-[#E50914] dark:bg-white dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-[#E50914] dark:focus:border-[#E50914]"
						placeholder="Rechercher Séries, Films..."
						required />
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-[#E50914] hover:bg-red-700  font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Rechercher
					</button>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;