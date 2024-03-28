/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
        'src',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.(s?css)$': 'identity-obj-proxy',
    },

    globals: {
        __IS_DEV__: true,
        __API__: '',
    },

};
