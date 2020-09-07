import { 
    seeProductsNavButton, searchProductInput,searchProductButton,
    cart, productsNavigation, seeCartButton
} from '../universal/selectors';
import toggleClasses from '../universal/toggleClasses';

const sets = [
    [seeProductsNavButton, productsNavigation, 'container__products-navigation--shown'],
    [searchProductButton, searchProductInput, 'nav__search-product-input--shown'],
    [seeCartButton, cart, 'container__cart--shown']
]

const clickEventsFunctionality = () => {
    sets.forEach(([button, item, classToToggle]) => {
        button.addEventListener('click', toggleClasses(classToToggle, item));
    })
}

export default clickEventsFunctionality;