import Product from '../product/product';
import { productsArray } from '../universal/selectors';

const fetchData = async () => {
    try {
        const data = await fetch('./products.json');
        const json = await data.json();
        prepareData(json);
    } catch(err) {
        err && console.log(err);
    }

}

const prepareData = (jsonData) => {
    Object.entries(jsonData).forEach(productData => {

        const id = productData[0];
        const productProperties = Object.values(productData[1]);

        const product = new Product([id, ...productProperties]);

        product.load();
        productsArray.push(product);
    });
}

export default fetchData;