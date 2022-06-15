/* eslint-disable @typescript-eslint/no-var-requires */
// Module(s) à transpiler avec next-transpile-modules
const withTM = require('next-transpile-modules')(['@stripe/firestore-stripe-payments']);

module.exports = withTM({
	reactStrictMode: true,
	images: {
		domains: ['image.tmdb.org', 'api.themoviedb.org'],
	},
});




/** @type {import('next').NextConfig} */
/*
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['image.tmdb.org', 'api.themoviedb.org'],
	},
};

module.exports = nextConfig;
*/