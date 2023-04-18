module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended",
		"plugin:i18next/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"i18next",
		"react-hooks"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"warn",
			"always"
		],
		"i18next/no-literal-string": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true
	}
};
