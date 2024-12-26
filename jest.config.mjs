// jest.config.mjs
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  testTimeout: 100000,
  coveragePathIgnorePatterns: ['lib', 'mock', 'dummy'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: [
    // '<rootDir>/setupTests.js',
    'jest-canvas-mock',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '\\.(png)$': '<rootDir>/config/jest/fileTransformBase64.js',
    '\\.(svg)$': '<rootDir>/config/jest/fileTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '@config/(.*)': '<rootDir>/config/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@mocks/(.*)': '<rootDir>/mocks/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
