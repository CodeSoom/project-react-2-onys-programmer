module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootdir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootdir>/__mocks__/styleMock.js'
  },

};
