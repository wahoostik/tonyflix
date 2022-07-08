/* eslint-disable @typescript-eslint/no-empty-function */
// Firebase - Authentification pour le Web
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User,} from 'firebase/auth';

// Routeur Next.js
import { useRouter } from 'next/router';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../lib/firebase';

type AuthProps = {
    children: React.ReactNode
};

type TypeAuth = {
    user: User | null,
    signUp: (email: string, password: string) => Promise<void>,
    signIn: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    error: string | null,
    loading: boolean,
};

const AuthContext = createContext<TypeAuth>({
	user: null,
	signUp: async () => {},
	signIn: async () => {},
	logout: async () => {},
	error: null,
	loading: false,
});

export const AuthProvider = ({children}: AuthProps) => {

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User | null>(null); // User => Utilisateur Firebase
	const [error, setError] = useState(null);
	const [initialLoading, setInitialLoading] = useState(true);
	const router = useRouter();

	useEffect(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// Connecté...
				setUser(user);
				setLoading(false);
			} else {
				// Pas connecté...
				setUser(null);
				setLoading(true);
				router.push('/');
			}
			setInitialLoading(false);
		}), [auth]);

	const signUp = async (email: string, password: string) => {
		try {
			setLoading(true);
        
			// Création d'un compte utilisateur
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
			router.push('https://tonyflix.vercel.app/browse'); // On envoie l'utilisateur sur la page d'accueil
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
			router.push('https://tonyflix.vercel.app/browse'); // On envoie l'utilisateur sur la page d'accueil
		} catch (error) {
			console.trace(error);
			alert('Erreur lors de la connexion');
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		try {
			setLoading(true);
			signOut(auth);
			setUser(null);
		} catch (error) {
			console.trace(error);
			alert('Erreur lors de la déconnexion');
		} finally {
			setLoading(false);
		}
	};

	const memoValue = useMemo(() => ({
		user, signUp, signIn, loading, error, logout,
	}), [user, loading]);

	return (
		<AuthContext.Provider value={memoValue}>
			{!initialLoading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}