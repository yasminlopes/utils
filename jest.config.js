module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^helpers$': '<rootDir>/src/helpers', // Serve para importar arquivos sem precisar de caminho relativo
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^validators$': '<rootDir>/src/validators', // Serve para importar arquivos sem precisar de caminho relativo
    '^validators/(.*)$': '<rootDir>/src/validators/$1',
    '^common/(.*)$': '<rootDir>/src/common/$1',
    '^common/(.*)$': '<rootDir>/src/common/$1',
  },
};
