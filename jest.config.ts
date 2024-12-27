import type { Config } from 'jest';

const config: Config = {
roots: ['<rootDir>/src'],
modulePaths: ['<rootDir>'],
moduleDirectories: ['node_modules', 'src'],
testEnvironment: 'jsdom',
moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js'
},
transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }]
    ]
    }]
},
transformIgnorePatterns: [
    '/node_modules/(?!(@?react-native.*|@?react-navigation.*|react-native-.*|@react-native-community.*)/)'
],
testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
],
moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
collectCoverage: true,
coverageDirectory: 'coverage',
coverageReporters: ['text', 'lcov'],
setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
testEnvironmentOptions: {
url: 'http://localhost',
customExportConditions: [''],
},
extensionsToTreatAsEsm: ['.ts', '.tsx'],
coverageThreshold: {
global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80
}
}
};

export default config;

