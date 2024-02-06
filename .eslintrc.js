module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
<<<<<<< HEAD
        'plugin:i18next/recommended',
=======
>>>>>>> 8c4fb52 (Добавил eslint, fix всех файлов)
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
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
<<<<<<< HEAD
        'i18next',
=======
>>>>>>> 8c4fb52 (Добавил eslint, fix всех файлов)
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
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
<<<<<<< HEAD
        'i18next/no-literal-string': ['error', { markupOnly: true }],
=======
>>>>>>> 8c4fb52 (Добавил eslint, fix всех файлов)
    },
    globals: {
        __IS_DEV__: true,
    },
};
