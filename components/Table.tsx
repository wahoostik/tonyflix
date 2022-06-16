import { CheckIcon } from '@heroicons/react/outline';
import { Product } from '@stripe/firestore-stripe-payments';

type Props = {
	products: Product[],
	selectedPlan: Product | null
}

function Table({products, selectedPlan}: Props) {
	return (
		<table>
			<tbody className='divide-y divide-white/40'>
				<tr className='tableRow'>
					<td className='tableTitle'>Abonnement mensuel</td>
					{products.map((product) => (
						<td
							key={product.id}
							className={`tableData ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-white/40'}`}>
							{product.prices[0].unit_amount! / 100} €
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableTitle'>Qualité vidéo</td>
					{products.map((product) => (
						<td
							key={product.id}
							className={`tableData ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-white/40'}`}>
							{product.metadata.videoQuality}
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableTitle'>Résolution</td>
					{products.map((product) => (
						<td
							key={product.id}
							className={`tableData ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-white/40'}`}>
							{product.metadata.resolution}
						</td>
					))}
				</tr>

				<tr className='tableRow'>
					<td className='tableTitle'>Tonyflix sur votre TV, ordinateur, smartphone et tablette</td>
					{products.map((product) => (
						<td
							key={product.id}
							className={`tableData ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-white/40'}`}>
							{product.metadata.portability === 'true' && (<CheckIcon className="inline-block h-8 w-8" />)}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
}

export default Table;