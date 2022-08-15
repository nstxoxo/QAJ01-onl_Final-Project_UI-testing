declare namespace Cypress {
  interface Chainable<Subject> {
    loginNegative(email: string, password: string): void;

    loginPositive(email: string, password: string): void;

    searchPositive(text: string): void;

    searchNegative(text: string): void;

    checkSearchResult(text: string): void;

    catalog(text: string): void;

    cart(text: string): void;

    converter(text: string): void;

    weather(text: string): void;

    checkTechSupportError(): void;

    checkAdvertisingPhoneError(text: string): void;

    checkAdvertisingEmailError(text: string): void;

    checkAdvertising(email: string, phoneNumber: string): void;

    checkCarFleaMarket(): void;
  }
}
