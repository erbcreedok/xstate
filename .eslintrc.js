const path = require('path')

module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		shallow: true,
		render: true,
		mount: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react-hooks', 'prettier', '@typescript-eslint'],
	extends: [
		'airbnb',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'import/no-cycle': [0],
		'react/react-in-jsx-scope': [0],
		'no-use-before-define': [0],
		'arrow-parens': ['error'],
		'linebreak-style': 'off',
		'eol-last': 'error',
		'lines-between-class-members': ['error', 'always'],
		'no-shadow': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, variables: false },
		],
		// allowTernary: a ? b() : c()
		'no-unused-expressions': ['error', { allowTernary: true }],
		// Doing `foo == null` to compare to both null and undefined is OK
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		// For files like `common.js`, it’s OK to have one named non-default export
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		// It’s OK to use .any/.array/.object if a component just passes the prop down
		// and doesn’t care about its structure
		'react/forbid-prop-types': 'off',
		'react/prop-types': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'no-param-reassign': ['error', { props: false }],
		'no-underscore-dangle': 'off',
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'function-paren-newline': 'off',
		'import/no-useless-path-segments': 'off',
		'implicit-arrow-linebreak': [0, 'beside'],
		'object-curly-newline': 'off',
		'operator-linebreak': [0, 'after'],
		'prefer-destructuring': 'off',
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'off',
		'react/no-unstable-nested-components': 'off',
		'react/no-array-index-key': 'off',
		'react/jsx-key': 'error',
		'react/sort-prop-types': ['error', { sortShapeProp: false }],
		'react/require-default-props': 'off',
		'react/no-danger': 'off',
		'react/jsx-closing-tag-location': 'warn',
		'react/no-access-state-in-setstate': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/static-property-placement': 'off',
		'react/state-in-constructor': 'off',
		'no-alert': 'off',
		'no-restricted-syntax': ['off', 'ForOfStatement'],

		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				vue: 'never',
			},
		],
		'template-curly-spacing': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': ['error'],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		camelcase: 'off',
		'max-classes-per-file': 'off',
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				moduleDirectory: ['.', 'node_modules'],
			},
			typescript: {},
			webpack: {
				config: {
					resolve: {
						extensions: ['.js', '.jsx', '.ts', '.tsx'],
						alias: {
							react: path.resolve(__dirname, 'node_modules', 'react'),
						},
					},
				},
			},
		},
	},
}
