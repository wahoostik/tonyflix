import { createCheckoutSession, getStripePayments } from '@stripe/firestore-stripe-payments';
import app from '../firebase';

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
		console.log('Snapshot : ', snapshot);
        
	} catch (error) {
		console.trace(error);
	}
};

export { loadCheckout };
export default payments;