import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import { goToBillingPortal } from '../lib/stripe';
import Loader from './Loader';

function Membership() {

	const { user } = useAuth();
	const subscription = useSubscription(user);
	const [isBillingLoading, setBillingLoading] = useState(false);

	const manageSubscription = () => {
		if (subscription) {
			setBillingLoading(true);
			goToBillingPortal();
		}
	};

	return (
		<div className='mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0'>
			<div className='space-y-2 py-4'>
				<h4 className='text-lg uppercase'>Abonnement et facturation</h4>
				<button
					disabled={isBillingLoading || !subscription}
					className='h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5'
					onClick={manageSubscription}>
					{isBillingLoading ? (<Loader color="blue-600" />) : ('ANNULER L\'ABONNEMENT')}
				</button>
			</div>

			<div className='col-span-3'>
				<div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
					<div>
						<p className='font-medium'>{user?.email}</p>
						<p className='text-[#888]'>Mot de passe : *********</p>
					</div>
					<div className='md:text-right'>
						<p className='membershipLink'>Modifier l&apos;adresse e-mail du compte</p>
						<p className='membershipLink'>Modifier le mot de passe</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Membership;