import { searchProductInput, productsArray, salesButton } from '../universal/selectors'

const searchingFunctionality = () => {
    searchProductInput.addEventListener('keyup', searchProducts);
}

const searchProducts = () => {
    const searchValue = searchProductInput.value;
    const val = searchValue.toLowerCase();
    const filter = searchProductInput.placeholder.slice(8).trim().toLowerCase();
    const onSaleFilter = salesButton.style.color === 'black';

    productsArray.forEach(product => {
        if (product.name.toLowerCase().indexOf(val) !== -1 && product.destination.toLowerCase() === filter) {
            if (onSaleFilter) {
                product.onSale ? product.show() : product.hide()
            } else {
                product.show()
            }
        } else {
            product.hide()
        }
    });
}

export default searchingFunctionality;