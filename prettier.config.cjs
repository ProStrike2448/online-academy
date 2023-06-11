/** @type {import("prettier").Config} */
const config = {
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
	tabWidth: 2,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	semi: false,
	trailingComma: 'none',
	useTabs: true
}

module.exports = config
