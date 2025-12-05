export default {
  projects: [
    {
      displayName: "client",
      roots: ["<rootDir>/client/src"],
      testEnvironment: "jest-environment-jsdom",
      transform: {
        "^.+\\.(ts|tsx|js|jsx)$": ["@swc/jest"],
      },
      setupFilesAfterEnv: ["<rootDir>/client/jest.setup.ts"],
      moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
      collectCoverage: true,
      collectCoverageFrom: ["<rootDir>/client/src/**/*.{ts,tsx}"]
    }
  ]
};
