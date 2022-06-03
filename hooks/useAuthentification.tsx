// Firebase - Authentification pour le Web
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User,} from 'firebase/auth';

// Routeur Next.js
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

function useAuthentification() {
	return (
		<div>useAuthentification</div>
	);
}

export default useAuthentification;