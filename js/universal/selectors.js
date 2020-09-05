// All selectors for eCommerce project

// Navigation
export const navigation = document.querySelector('.container__nav');
export const seeProductsNavButton = document.querySelector('.container__nav-see-menu-button');
export const searchProductInput = document.querySelector('.container__nav-search-product-input');
export const searchProductButton = document.querySelector('#search-products-button');
export const seeCartButton = document.querySelector('#see-cart-button');

// Products navigation 
export const productsNavigation = document.querySelector('.container__products-navigation');
export const productsNavigationList = document.querySelector('.container__products-navigation-list');
export const categoryButtons = [...document.getElementsByClassName('container__products-navigation-list-item')];
// export const [menButton, womenButton, boysButton, girlsButton] = Array.from(categoryButtons);

// Products container
export const productsContainer = document.querySelector('.container__products-container');

// Cart
export const cart = document.querySelector('.container__cart');
export const totalPriceHolder = document.querySelector('.container__cart-total-price-int');
export const cartItemsContainer = document.querySelector('.container__cart-items-container');

// Product details container
export const productDetailsContainer = document.querySelector('.container__product-details-container');
export const productDetailsImg = document.querySelector('.container__product-details-container-img');
export const productDetailsHideButton = document.querySelector('.container__product-details-container-hide-button');
export const addToCartButton = document.querySelector('.container__product-details-container-add-to-cart-button');
export const productDetailsListItems = [...document.getElementsByClassName('product-details-detail')];
export const productDetailsSizeSelect = document.querySelector('.product-details-size')

// Other
export const productsArray = [];
export const cartItems = [];
export const currentlyViewedProductDetails = [];