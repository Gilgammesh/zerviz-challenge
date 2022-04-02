module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-unused-vars': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'no-use-before-define': 'off',
		'no-nested-ternary': 'off',
		'no-underscore-dangle': 'off',
		'import/no-unresolved': 'off',
		'no-constant-condition': 'off',
		'global-require': 'off'
	}
};
