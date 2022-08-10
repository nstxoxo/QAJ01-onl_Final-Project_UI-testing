import { input } from "../../fixtures/searchText";

describe("onliner.by testing", () => {
  beforeEach("Open main page", () => {
    cy.visit("/");
  });
  it("Negative test.Check login page", () => {
    cy.login(input.randomEmail, input.randomPassword);
  });

  it.only("Check search field positive", () => {
    cy.searchPositive(input.text.dell);
  });
  
  it.only("Check search field negative", () => {
    cy.searchNegative(input.text.random);
  });

  it("Check catalog", () => {
    cy.catalog("по суперцене");
  });
});
