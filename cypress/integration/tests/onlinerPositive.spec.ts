import { INPUT } from "../../fixtures/searchText";

describe("Onliner.by testing. Positive tests.", () => {
  beforeEach("Open main page", () => {
    cy.visit("/");
  });

  it("Check login page", () => {
    cy.loginPositive(INPUT.signupEmail, INPUT.signupPassword);
  });

  it("Check search field", () => {
    cy.searchPositive(INPUT.text.dell);
  });

  it("Check catalog link", () => {
    cy.catalog(INPUT.bestPrice);
  });

  it("Check currency service", () => {
    cy.converter(INPUT.currency);
  });

  it("Check weather link", () => {
    cy.weather(INPUT.polotskCity);
  });

  it("Check advertising form", () => {
    cy.checkAdvertising(INPUT.email, INPUT.phoneNumber);
  });

  it("Check car flea market page", () => {
    cy.checkCarFleaMarket();
  });
});
