import { 
    productDetailsListItems, productDetailsSizeSelect, productDetailsImg, cart
} from '../universal/selectors';
import hideProductDetailsContainer from './hideProductDetailsContainer';
import showCartForAMoment from '../cart/showCartForAMoment';
import CartProduct from '../product/cartProduct';
import isChosenProductInCart from '../cart/isChosenProductInCart';
import scrollToCartItem from '../cart/scrollToCartItem';

const addChosenProductToCart = () => {

    const dataArray = getDetailsForCartProduct();

    const {0: id, 6: size} = dataArray;
    let result = isChosenProductInCart(id, size); // returns undefined or object
    
    result !== undefined ? result.increaseAmmount() : result = new CartProduct(dataArray);
    result.ammount === 0 && result.load();
    
    hideProductDetailsContainer();
    showCartForAMoment();
    scrollToCartItem(result);
}

const getDetailsForCartProduct = () => {
    const selectedSize = productDetailsSizeSelect.value;
    const productImg = productDetailsImg.src;
    const productId = productDetailsImg.id;
    
    return [productId, ...productDetailsListItems.map(item => item.textContent), 
                                                        productImg, selectedSize];
}

export default addChosenProductToCart;