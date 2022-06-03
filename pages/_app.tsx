import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>  {/* Higher Order Component */}
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
