const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/index.ts",
    specPattern: "cypress/integration/*.ts",
    defaultCommandTimeout: 10000
  },
});
