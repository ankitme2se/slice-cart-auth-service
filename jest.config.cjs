const { createDefaultPreset } = require('ts-jest');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: createDefaultPreset().transform,
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/*.spec.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
