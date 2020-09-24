module.exports = {
    "transform": {
        ".(ts|tsx)": "ts-jest"
    },
    "testEnvironment": "jsdom",
    "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 90,
            "functions": 95,
            "lines": 95,
            "statements": 95
        }
    },
    "collectCoverageFrom": [
        "src/*.{js,ts}",
        "src/**/*.{js,ts}"
    ],
}
