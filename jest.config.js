module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/__mocks__/fileMock.js",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@stores/(.*)$": "<rootDir>/src/stores/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@hoc/(.*)$": "<rootDir>/src/hoc/$1",
    "^@test/(.*)$": "<rootDir>/src/test/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
