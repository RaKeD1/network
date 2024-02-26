module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-indent-props': [2, 4],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'warn',
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'max-len': ['error', {
            code: 100,
            ignoreComments: true,
            ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
