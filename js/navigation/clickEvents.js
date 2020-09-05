import { 
    seeProductsNavButton, searchProductInput,searchProductButton,
    cart, productsNavigation, seeCartButton
} from '../universal/selectors';
import toggleClasses from '../universal/toggleClasses';

const sets = [
    [seeProductsNavButton, productsNavigation, 'shown-products-navigation'],
    [searchProductButton, searchProductInput, 'shown-search-product-input'],
    [seeCartButton, cart, 'shown-cart']
]

const clickEventsFunctionality = () => {
    sets.forEach(([button, item, classToToggle]) => {
        button.addEventListener('click', toggleClasses(classToToggle, item));
    })
}

export default clickEventsFunctionality;