// Firebase - Authentification pour le Web
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User,} from 'firebase/auth';

// Routeur Next.js
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

function useAuthentification() {

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User | null>(null); // User => Utilisateur Firebase
	const router = useRouter();

	const signUp = async (email: string, password: string) => {
		try {
			setLoading(true);
        
			// Création d'un compte utilisateur
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
			router.push('/'); // On envoie l'utilisateur sur la page d'accueil
		} catch (error) {
			console.trace(error);
			alert('Erreur lors de l\'inscription');
		} finally {
			setLoading(false);
		}
	};

	const signIn = async (email: string, password: string) => {
		try {
			setLoading(true);
        
			// Connexion d'un compte utilisateur
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
			router.push('/'); // On envoie l'utilisateur sur la page d'accueil
		} catch (error) {
			console.trace(error);
			alert('Erreur lors de l\'inscription');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>useAuthentification</div>
	);
}

export default useAuthentification;