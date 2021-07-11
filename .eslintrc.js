module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', 'prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-tabs': [2, { allowIndentationTabs: true }],
		'react/prop-types': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
