// All selectors for eCommerce project

// Navigation
export const navigation = document.querySelector('.container__nav');
export const seeProductsNavButton = document.querySelector('.nav__see-menu-button');
export const searchProductInput = document.querySelector('.nav__search-product-input');
export const searchProductButton = document.querySelector('#search-products-button');
export const seeCartButton = document.querySelector('#see-cart-button');

// Products navigation 
export const productsNavigation = document.querySelector('.container__products-navigation');
export const productsNavigationList = document.querySelector('.products-navigation__list');
export const categoryButtons = [...document.getElementsByClassName('products-navigation__list-item')];
export const salesButton = categoryButtons.pop();
// export const [menButton, womenButton, boysButton, girlsButton] = Array.from(categoryButtons);

// Products container
export const productsContainer = document.querySelector('.container__products-container');

// Cart
export const cart = document.querySelector('.container__cart');
export const totalPriceHolder = document.querySelector('.cart__total-price-int');
export const cartItemsContainer = document.querySelector('.cart__items-container');

// Product details container
export const productDetailsContainer = document.querySelector('.container__product-details-container');
export const productDetailsImg = document.querySelector('.product-details-container__img');
export const productDetailsHideButton = document.querySelector('.product-details-container__hide-button');
export const addToCartButton = document.querySelector('.product-details-container__add-to-cart-button');
export const productDetailsListItems = [...document.getElementsByClassName('product-details-detail')];
export const productDetailsSizeSelect = document.querySelector('.product-details-size')

// Other
export const productsArray = [];
export const cartItems = [];
export const currentlyViewedProductDetails = [];