import { cartItemsContainer } from '../universal/selectors';

const scrollToCartItem = ({ mainDiv }) => {
    const scrollValue = mainDiv.offsetTop;
    const scrollOptions = {
        top: scrollValue,
        behavior: 'smooth'
    }

    cartItemsContainer.scrollTop !== scrollValue &&
        setTimeout(() => cartItemsContainer.scrollTo(scrollOptions), 500);
}

export default scrollToCartItem;