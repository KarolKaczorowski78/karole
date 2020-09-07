import { cart } from '../universal/selectors';

const showCartForAMoment = () => {
    cart.classList.add('container__cart--shown');
    setTimeout(() => cart.classList.remove('container__cart--shown'), 2000);
}

export default showCartForAMoment;