import { productDetailsHideButton, addToCartButton } from '../universal/selectors';
import hideProductDetailsContainer from './hideProductDetailsContainer';
import addChosenProductToCart from './addChosenProductToCart';

const clickEventsFunctionality = () => {
    productDetailsHideButton.addEventListener('click', hideProductDetailsContainer);
    addToCartButton.addEventListener('click', addChosenProductToCart);
}


export default clickEventsFunctionality;