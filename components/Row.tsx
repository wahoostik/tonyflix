import { Movie } from '../typing';

type Props = {
    title: string
    movies: Movie[]
};

function Row({title, movies}: Props) {
	return (
		<div>
			<h2>{title}</h2>
		</div>
	);
}

export default Row;