import { Product } from '@stripe/firestore-stripe-payments';

type Props = {
	products: Product[]
}

function Table({products}: Props) {
	return (
		<table>
			<tbody className='divide-y divide-white/40'>
				<tr className='tableRow'>
					<td className='tableTitle'>Abonnement mensuel</td>
					{products.map((product) => (
						<td
							key={product.id}
							className='tableData'>
							{product.prices[0].unit_amount! / 100} €
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableTitle'>Qualité vidéo</td>
					{products.map((product) => (
						<td
							key={product.id}
							className='tableData'>
							{product.metadata.videoQuality}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
}

export default Table;