import { createCheckoutSession, getStripePayments } from '@stripe/firestore-stripe-payments';
import { getFunctions, httpsCallable } from '@firebase/functions';
import app from './firebase';
import { log } from 'console';

const payments = getStripePayments(app, {
	productsCollection: 'products', // Forfait/Abonnement
	customersCollection: 'customers', // Client/Utilisateur
});

const loadCheckout = async (priceId: string) => {
	try {
		const createSession = await createCheckoutSession(payments, {
			price: priceId,
			success_url: window.location.origin, // Valeur du domaine
			cancel_url: window.location.origin,
		});
		const snapshot = window.location.assign(createSession.url);
        
	} catch (error) {
		console.trace(error);
	}
};

/*
const goToBillingPortal = async () => {
	const instance = getFunctions(app, 'us-central1'); // Domaine
	const functionRef = httpsCallable(instance,'ext-firestore-stripe-payments-createPortalLink'); // Redirection du client vers le portail

	await functionRef({
		returnUrl: `${window.location.origin}/account`}) // redirection vers la page /account
		.then(({ data }: any) => window.location.assign(data.url))
		.catch((error) => console.trace(error.message));
};
*/
const goToBillingPortal = async () => {
	try {
		const instance = getFunctions(app, 'us-central1'); // Domaine
		const functionRef = httpsCallable(instance,'ext-firestore-stripe-payments-createPortalLink'); // Redirection du client vers le portail
	
		const responseAccount = await functionRef({returnUrl: `${window.location.origin}/account`}); // redirection vers la page /account
		
		const responseData = ({data}: any) => {
			window.location.assign(data.url);
		};

		responseData(responseAccount);
	} catch (error) {
		console.trace(error);
	}
};

export { loadCheckout, goToBillingPortal };
export default payments;