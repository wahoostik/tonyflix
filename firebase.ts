// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCWb43kAtnwXpm0QqQ6zsKw6bbTvuCfAVw',
	authDomain: 'tonyflix-a62fa.firebaseapp.com',
	projectId: 'tonyflix-a62fa',
	storageBucket: 'tonyflix-a62fa.appspot.com',
	messagingSenderId: '231692128836',
	appId: '1:231692128836:web:6eed0ed159491c25456211'
};

// Initialize Firebase
// Vérification si l'application est initialisé ou non
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };