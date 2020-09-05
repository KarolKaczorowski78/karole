import { cart } from '../universal/selectors';

const showCartForAMoment = () => {
    cart.classList.add('shown-cart');
    setTimeout(() => cart.classList.remove('shown-cart'), 2000);
}

export default showCartForAMoment;