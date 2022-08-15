import { INPUT } from "../../fixtures/searchText";

describe("Onliner.by testing. Negative tests.", () => {
  beforeEach("Open main page", () => {
    cy.visit("/");
  });

  it("Check login page", () => {
    cy.loginNegative(INPUT.randomEmail, INPUT.randomPassword);
  });

  it("Check search field", () => {
    cy.searchNegative(INPUT.text.random);
  });

  it("Check cart link", () => {
    cy.cart(INPUT.emptyCart);
  });

  it("Check tech support error", () => {
    cy.checkTechSupportError();
  });

  it("Check advertising phone error", () => {
    cy.checkAdvertisingPhoneError("+3758");
  });

  it("Check advertising email error", () => {
    cy.checkAdvertisingEmailError("hello@mail.ru ");
  });
});
