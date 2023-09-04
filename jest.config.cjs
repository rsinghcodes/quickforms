/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/*.spec.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Transform TypeScript files using ts-jest
  },
  // A list of paths to modules that run some code to configure or set up
  // the testing framework before each test file in the suite is executed
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/*.d.ts'],
  moduleNameMapper: {
    // Handle TypeScript path aliases
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  verbose: true,
  testTimeout: 30000
};
