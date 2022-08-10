declare namespace Cypress {
    interface Chainable<Subject> {
      login(email: string, password: string): void;

      searchPositive(text: string): void;

      searchNegative(text: string): void;

      checkSearchResult(text: string): void;

      catalog(text: string): void;

    }
}
