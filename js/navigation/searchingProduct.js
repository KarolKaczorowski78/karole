import { searchProductInput, productsArray } from '../universal/selectors'

const searchingFunctionality = () => {
    searchProductInput.addEventListener('keyup', searchProducts);
}

const searchProducts = () => {
    const searchValue = searchProductInput.value;
    const val = searchValue.toLowerCase();

    productsArray.forEach(product => {
        product.name.toLowerCase().indexOf(val) != -1 ? product.show() : product.hide();
    });
}

export default searchingFunctionality;