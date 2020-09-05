import { cartItems } from '../universal/selectors';

const isChosenProductInCart = (id, size) => 
                    cartItems.find(item => item.id === id && item.size === size);

export default isChosenProductInCart;