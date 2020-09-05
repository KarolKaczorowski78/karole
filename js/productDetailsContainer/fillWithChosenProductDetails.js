import {
    productDetailsListItems, productDetailsImg, productDetailsSizeSelect
} from '../universal/selectors';

const fillWithCurrentProductDetails = (productData) => {
    const id = productData.pop();
    const imgUrl = productData.pop();
    const avaibleSizes = productData.pop();

    productDetailsImg.src = imgUrl;
    productDetailsImg.id = id;

    for (let i = 0; i < productDetailsListItems.length; i++) {
        productDetailsListItems[i].textContent = productData[i];
    }

    fillSizeSelectTag(avaibleSizes);

}

const fillSizeSelectTag = (sizeArray) => {
    productDetailsSizeSelect.innerHTML = '';

    sizeArray.forEach(size => {
        const option = document.createElement('option');

        option.value = option.textContent = size;
        productDetailsSizeSelect.appendChild(option);
        
    })
}

export default fillWithCurrentProductDetails;