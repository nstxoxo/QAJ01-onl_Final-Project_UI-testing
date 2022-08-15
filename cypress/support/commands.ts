import { locators } from "../locators/locators";
import "cypress-xpath";
import "cypress-iframe";

export const getIframeDocument = () => {
  return cy.get(locators.iframe).its("0.contentDocument");
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

Cypress.Commands.add(
  "loginNegative",
  (email: string, password: string): void => {
    cy.get(locators.loginButton).click();
    cy.get(locators.username).type(email);
    cy.get(locators.password).type(password);
    cy.get(locators.loginButtonField).within(() => {
      cy.get(locators.loginButtonOnPage).click();
    });
    cy.get(locators.validationError).should("be.visible");
  }
);

Cypress.Commands.add(
  "loginPositive",
  (email: string, password: string): void => {
    cy.get(locators.loginButton).click();
    cy.get(locators.username).type(email);
    cy.get(locators.password).type(password);
    cy.get(locators.loginButtonField).within(() => {
      cy.get(locators.loginButtonOnPage).click();
    });
    cy.get(locators.loginCaptcha).should("be.visible");
  }
);

Cypress.Commands.add("catalog", (text: string): void => {
  cy.get(locators.catalogField).within(() => {
    cy.get(locators.catalogButton).click();
  });
  cy.get(locators.primary).click();
  cy.get(locators.superPrice).should("contain.text", text);
});

Cypress.Commands.add("cart", (text: string): void => {
  cy.get(locators.cartButton).click();
  cy.get(locators.emptyCart).should("contain.text", text);
});

Cypress.Commands.add("converter", (text: string): void => {
  cy.get(locators.currencyLink).click();
  cy.get(locators.currencyConverter).clear();
  cy.get(locators.currencyConverter).type(text);
  cy.get(locators.curResult).should("be.visible");
});

Cypress.Commands.add("weather", (text: string): void => {
  cy.get(locators.weatherLink).click();
  cy.get(locators.weatherCity).click();
  cy.get(locators.polotskCity).click();
  cy.get(locators.weatherCity).should("contain.text", text);
});

Cypress.Commands.add("checkTechSupportError", (): void => {
  cy.get(locators.techSupport).click();
  cy.get(locators.techSupportSubmit).click();
  cy.get(locators.techSupportError).should("be.visible");
});

Cypress.Commands.add("checkAdvertisingPhoneError", (text: string): void => {
  cy.get(locators.advertisement).click();
  cy.get(locators.contactPhone).type(text);
  cy.get(locators.sendButton).click();
  cy.xpath(locators.advertisementPhoneError).should(
    "contain",
    "Некорректный номер телефона"
  );
});

Cypress.Commands.add("checkAdvertisingEmailError", (text: string): void => {
  cy.get(locators.advertisement).click();
  cy.get(locators.contactEmail).type(text);
  cy.get(locators.sendButton).click();
  cy.xpath(locators.advertisementEmailError).should(
    "contain",
    "Некорректный email"
  );
});

Cypress.Commands.add(
  "checkAdvertising",
  (email: string, phoneNumber: string): void => {
    cy.get(locators.advertisement).click();
    cy.get(locators.contactEmail).type(email);
    cy.get(locators.contactPhone).type(phoneNumber);
    cy.get(locators.sendButton).click();
    cy.get(locators.successMessage).should("contain", "Ваш номер уже у нас!");
  }
);

Cypress.Commands.add("checkCarFleaMarket", (): void => {
  cy.get(locators.findCars).click();
  cy.get(locators.carFleaMarket).should("contain", "Автобарахолка");
});
