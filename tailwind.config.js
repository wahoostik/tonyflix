module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-to-b':
					'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
			},
			keyframes: {
				'fade-in-down-with-opacity': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				}
			},
			animation: {
				'fade-in-down-with-opacity': 'fade-in-down-with-opacity 1s ease-out'
			}
		},
		screens: {
			'vsm': '250px', // => @media (min-width: 250px) { very small screen }
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		}
	},
	plugins: [
		require('tailwindcss-textshadow'),
		require('tailwind-scrollbar-hide'),
		require('tailwind-scrollbar'),
		require('flowbite/plugin')
	],
};
