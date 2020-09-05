import { cartItems, totalPriceHolder } from '../universal/selectors';

const updateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc + parseFloat(item.price) * item.ammount);
    }, 0);

    totalPriceHolder.textContent = totalPrice.toFixed(2);
}

export default updateTotalPrice;