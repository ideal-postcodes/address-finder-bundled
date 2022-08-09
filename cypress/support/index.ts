import { Config } from "@ideal-postcodes/jsutil";

declare global {
  namespace Cypress {
    interface Chainable {
      setup(url: string): void;
    }
  }
}

declare global {
  interface Window {
    apiKey: string;
  }
}

Cypress.Commands.add("setup", (url) => {
  cy.visit(url, {
    onBeforeLoad: (window) => {
      window.apiKey = Cypress.env("API_KEY") || "ak_test";
    },
  });
});
