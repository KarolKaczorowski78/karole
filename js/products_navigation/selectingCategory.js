import { categoryButtons, productsArray } from '../universal/selectors';
import updateInputField from '../navigation/updateInputField';

const selectCategoryFunctionality = () => {
    (() => {
        const salesButton = categoryButtons.pop();
        const str = 'all items';

        let currentCategory = str;
        let showOnlySales = false;

        categoryButtons.forEach(btn => btn.addEventListener('click', chooseCategory));
        salesButton.addEventListener('click', chooseSales);

        ///////////////////////////////////////////////////////////////////////////////

        function chooseCategory() {
            const chosenCategory = this.textContent;
            currentCategory = currentCategory === chosenCategory ? str : chosenCategory;

            updateInputField(currentCategory);
            updateButtonsStyling();
            updateProductsDisplay();
        }

        function chooseSales() { 
            showOnlySales = showOnlySales ? false : true;
            salesButton.style.color = showOnlySales ? 'black' : 'grey';
            
            updateProductsDisplay();
        }

        const updateProductsDisplay = () => {
            productsArray.forEach(product => {
                const { destination, onSale, mainDiv } = product;

                currentCategory === str ? product.show() : destination === currentCategory ? 
                                                            product.show() : product.hide();

                if (mainDiv.style.display === 'inline' && showOnlySales) {
                    onSale ? product.show() : product.hide();
                }
            });
        }

        const updateButtonsStyling = () => {
            for (let button of categoryButtons) {
                const { textContent, style } = button;
                style.color = textContent === currentCategory ? 'black' : 'grey';
            }
        }
    })()
}

export default selectCategoryFunctionality;