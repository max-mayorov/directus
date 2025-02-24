import type { Theme } from '../schema.js';

export const theme: Theme = {
	name: 'Dark (Directus)',
	appearance: 'dark',
	rules: {
		fontFamilyDisplay: 'var(--theme--font-family-sans-serif)',
		fontFamilySansSerif: '"Inter", system-ui',
		fontFamilySerif: '"Merriweather", serif',
		fontFamilyMonospace: '"Fira Mono", monospace',

		borderRadius: '6px',
		borderWidth: '2px',

		foreground: '#c9d1d9',
		foregroundAccent: '#f0f6fc',
		foregroundSubdued: '#666672',

		backgroundPage: '#0d1117',

		background: '#21262e',
		backgroundAccent: '#30363d',
		backgroundSubdued: '#161b22',

		borderColor: '#21262e',
		borderColorAccent: '#30363d',
		borderColorSubdued: '#21262d',

		primary: 'var(--project-color)',
		primaryBackground: 'color-mix(in srgb, var(--theme--background-page), var(--theme--primary) 10%)',
		primarySubdued: 'color-mix(in srgb, var(--theme--background-page), var(--theme--primary) 50%)',
		primaryAccent: 'color-mix(in srgb, var(--theme--primary), #16151a 25%)',

		secondary: '#ff99dd',
		secondaryBackground: 'color-mix(in srgb, var(--theme--background-page), var(--theme--secondary) 10%)',
		secondarySubdued: 'color-mix(in srgb, var(--theme--background-page), var(--theme--secondary) 50%)',
		secondaryAccent: 'color-mix(in srgb, var(--theme--secondary), #16151a 25%)',

		success: '#2ecda7',
		successBackground: 'color-mix(in srgb, var(--theme--background-page), var(--theme--success) 10%)',
		successSubdued: 'color-mix(in srgb, var(--theme--background-page), var(--theme--success) 50%)',
		successAccent: 'color-mix(in srgb, var(--theme--success), #16151a 25%)',

		warning: '#ffa439',
		warningBackground: 'color-mix(in srgb, var(--theme--background-page), var(--theme--warning) 10%)',
		warningSubdued: 'color-mix(in srgb, var(--theme--background-page), var(--theme--warning) 50%)',
		warningAccent: 'color-mix(in srgb, var(--theme--warning), #16151a 25%)',

		danger: '#e35169',
		dangerBackground: 'color-mix(in srgb, var(--theme--background-page), var(--theme--danger) 10%)',
		dangerSubdued: 'color-mix(in srgb, var(--theme--background-page), var(--theme--danger) 50%)',
		dangerAccent: 'color-mix(in srgb, var(--theme--danger), #16151a 25%)',

		navigation: {
			background: '#21262e',
			backgroundAccent: '#30363d',

			borderColor: 'transparent',
			borderWidth: '0px',

			project: {
				borderColor: 'transparent',
				borderWidth: '0px',
				background: '#30363d',
				foreground: 'var(--theme--foreground-accent)',
				fontFamily: 'var(--theme--font-family-sans-serif)',
			},

			modules: {
				background: 'var(--theme--background-page)',
				borderColor: 'transparent',
				borderWidth: '0px',

				button: {
					foreground: 'var(--theme--foreground-subdued)',
					foregroundHover: '#fff',
					foregroundActive: 'var(--theme--foreground-accent)',

					background: 'transparent',
					backgroundHover: 'transparent',
					backgroundActive: '#21262e',
				},
			},

			list: {
				icon: {
					foreground: 'var(--theme--primary)',
					foregroundHover: 'var(--theme--navigation--list--icon--foreground)',
					foregroundActive: 'var(--theme--navigation--list--icon--foreground)',
				},

				foreground: 'var(--theme--foreground-accent)',
				foregroundHover: 'var(--theme--navigation--list--foreground)',
				foregroundActive: 'var(--theme--navigation--list--foreground)',

				background: 'transparent',
				backgroundHover: '#30363d',
				backgroundActive: '#30363d',

				fontFamily: 'var(--theme--font-family-sans-serif)',

				divider: {
					borderColor: '#30363d',
					borderWidth: 'var(--theme--border-width)',
				},
			},
		},

		header: {
			background: 'var(--theme--background-page)',
			borderColor: 'transparent',
			borderWidth: '0px',
			boxShadow: '0 4px 7px -4px rgb(var(--black) / 0.2)',
			headline: {
				foreground: 'var(--theme--foreground-subdued)',
				fontFamily: 'var(--theme--font-family-sans-serif)',
			},
			title: {
				foreground: 'var(--theme--foreground-accent)',
				fontFamily: 'var(--theme--font-family-display)',
			},
		},

		form: {
			field: {
				label: {
					foreground: 'var(--theme--foreground-accent)',
					fontFamily: 'var(--theme--font-family-sans-serif)',
				},
				input: {
					background: 'var(--theme--background-page)',
					foreground: 'var(--theme--foreground)',
					foregroundSubdued: 'var(--theme--foreground-subdued)',

					borderColor: '#21262e',
					borderColorHover: '#30363d',
					borderColorFocus: 'var(--theme--primary)',

					boxShadow: 'none',
					boxShadowHover: 'none',
					boxShadowFocus: '0 0 16px -8px var(--theme--primary)',
				},
			},
		},

		sidebar: {
			background: '#21262e',
			foreground: 'var(--theme--foreground-subdued)',
			fontFamily: 'var(--theme--font-family-sans-serif)',
			borderColor: 'transparent',
			borderWidth: '0px',

			section: {
				toggle: {
					icon: {
						foreground: 'var(--theme--foreground-accent)',
						foregroundHover: 'var(--theme--sidebar--section--toggle--icon--foreground)',
						foregroundActive: 'var(--theme--sidebar--section--toggle--icon--foreground)',
					},

					foreground: 'var(--theme--foreground-accent)',
					foregroundHover: 'var(--theme--sidebar--section--toggle--foreground)',
					foregroundActive: 'var(--theme--sidebar--section--toggle--foreground)',

					background: '#30363d',
					backgroundHover: 'var(--theme--sidebar--section--toggle--background)',
					backgroundActive: 'var(--theme--sidebar--section--toggle--background)',

					fontFamily: 'var(--theme--font-family-sans-serif)',

					borderColor: 'transparent',
					borderWidth: '0px',
				},
			},
		},

		public: {
			background: 'var(--theme--background-page)',
			foreground: 'var(--theme--foreground)',
			foregroundAccent: 'var(--theme--foreground-accent)',

			art: {
				background: '#0e1c2f',
				primary: 'var(--theme--primary)',
				secondary: 'var(--theme--secondary)',
				speed: '1',
			},

			form: {
				field: {
					input: {
						background: 'var(--theme--form--field--input--background)',
						foreground: 'var(--theme--form--field--input--foreground)',
						foregroundSubdued: 'var(--theme--form--field--input--foreground-subdued)',

						borderColor: 'var(--theme--form--field--input--border-color)',
						borderColorHover: 'var(--theme--form--field--input--border-color-hover)',
						borderColorFocus: 'var(--theme--form--field--input--border-color-focus)',

						boxShadow: 'var(--theme--form--field--input--box-shadow)',
						boxShadowHover: 'var(--theme--form--field--input--box-shadow-hover)',
						boxShadowFocus: 'var(--theme--form--field--input--box-shadow-focus)',
					},
				},
			},
		},
	},
};
