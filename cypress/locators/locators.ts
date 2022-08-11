export const locators = {
  loginButton: "div.auth-bar__item.auth-bar__item--text",
  username: 'input[placeholder="Ник или e-mail"]',
  password: 'input[placeholder="Пароль"]',
  loginButtonField:
    'div[class="auth-form__control auth-form__control_condensed-additional"]',
  loginButtonOnPage: 'button[type="submit"]',
  validationError:
    'div[class="auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other"]',
  inputField: '[class="fast-search__input"]',
  searchInput: 'input[placeholder="Поиск"]',
  catalogField: 'li[class="b-main-navigation__item"]',
  catalogButton: '[href="https://catalog.onliner.by"]',
  primary:
    'a[class="catalog-navigation__bubble catalog-navigation__bubble_primary"]',
  superPrice: '[class="schema-header__title js-super-price-title"]',
  category: '[class="result__item result__item_category"]',
  iframeSearchResult: 'ul[class="search__results"]',
  iframe: 'iframe.modal-iframe',
};
