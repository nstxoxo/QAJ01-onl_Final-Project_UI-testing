import { locators } from "../locators/locators";
import "cypress-iframe";

export const getIframeDocument = () => {
  return cy.get('iframe[class="modal-iframe"]').its("0.contentDocument");
};

export const getIframeBody = () => {
  return getIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
};

Cypress.Commands.add("searchPositive", (text: string): void => {
  getIframeBody().find(locators.searchInput).type(text);
  getIframeBody().find(locators.iframeSearchResult).should("be.visible");
});

Cypress.Commands.add("searchNegative", (text: string): void => {
  getIframeBody().find(locators.searchInput).type(text);
  getIframeBody().find(locators.iframeSearchResult).should("be.empty");
});

Cypress.Commands.add("login", (email: string, password: string): void => {
  cy.get(locators.loginButton).click();
  cy.get(locators.username).type(email);
  cy.get(locators.password).type(password);
  cy.get(locators.loginButtonField).within(() => {
    cy.get(locators.loginButtonOnPage).click();
  });
  cy.get(locators.validationError).should("be.visible");
});

Cypress.Commands.add("catalog", (text: string): void => {
  cy.get(locators.catalogField).within(() => {
    cy.get(locators.catalogButton).click();
  });
  cy.get(locators.primary).click();
  cy.get(locators.superPrice).should("contain.text", text);
});
