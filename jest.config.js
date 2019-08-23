//@ts-ignore
module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        "^.+\\.jsx?$": "babel-jest", 
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.(css|scss|less)$": "jest-css-modules"
    },
    testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}