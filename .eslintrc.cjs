module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		// Vue-specific rules
		'vue/multi-word-component-names': 'off', // Allow single-word components like "Tabs"
		'vue/require-default-prop': 'warn',
		'vue/require-prop-types': 'error',
		'vue/no-v-html': 'warn', // Security

		// General JavaScript rules
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

		// Code quality
		'prefer-const': 'error',
		'no-var': 'error',

		// Accessibility
		'vue/no-static-inline-styles': 'off', // We use CSS variables
	},
}
