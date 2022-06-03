/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import BackgroundLogin from '../public/netflix-background.jpg';
import TLogo from '../public/tonyflix.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

type Inputs = {
	email: string,
	password: string,
};

function Login() {

	const [login, setLogin] = useState(false);

	// React-Hook-Form
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const { signIn, signUp } = useAuth();
	const onSubmit: SubmitHandler<Inputs> =  async ({email, password}) => {
		console.log('email: ' + email, 'mot de passe: ' + password);
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
	};

	return (
		<div className='relative flex h-screen w-screen flex-col bg-[#010511] md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Tonyflix - Connexion</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image
				src={BackgroundLogin}
				alt='Tonyflix Login Background'
				layout='fill'
				objectFit='cover'
				className='-z-10 !hidden opacity-60 sm:!inline'
			/>
			<div className='absolute left-4 top-4 md:left-10 md:top-6 lg:w-72 md:w-72 sm:w-44 vsm:w-44'>
				<Image
					src={TLogo}
					alt='Tonyflix Logo'
					width={300}
					height={150}
					className='cursor-pointer object-contain'/>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)} // 'handleSubmit' validera les entrées avant d'invoquer 'onSubmit'
				className='relative mt-24 space-y-8 rounded bg-[#010511]/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
				<h1 className='text-4xl font-bold'>S'identifier</h1>
				<div className='space-y-4'>
					<label className='inline-block w-full'>
						<input
							type='email'
							placeholder='E-mail'
							className='input'
							{...register('email', { required: true })}
						/>
						{/* Erreur lorsque la validation du champ échoue  */}
						{errors.email && <p className='p-1 text-[13px] font-ligh text-orange-500'>L'e-mail est obligatoire pour pouvoir se connecter.</p>}
					</label>
					<label className='inline-block w-full'>
						<input
							type='password'
							placeholder='Mot de passe'
							className='input'
							{...register('password', { required: true })}
						/>
						{errors.password && <p className='p-1 text-[13px] font-light text-orange-500'>Le mot de passe est obligatoire pour pouvoir se connecter.</p>}
					</label>
				</div>
				<button
					className='w-full rounded bg-[#e50914] py-3 font-bold'
					onClick={() => setLogin(true)}
				>
					S'identifier
				</button>
				<div className='text-[#9e9e9e] flex'>
					<h2>Première visite sur Tonyflix ?&ensp;</h2>
					<button
						type='submit'
						className='text-white hover:underline'
						onClick={() => setLogin(false)}
					>
						Inscrivez-vous.
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;