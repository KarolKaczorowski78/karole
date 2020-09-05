import navigationApp from './navigation/nav_app';
import cartApp from './cart/cart_app';
import productsContainerApp from './products_container/products_container_app';
import productsNavApp from './products_navigation/products_nav_app'
import productDetailsApp from './productDetailsContainer/product_details_app';

const app = () => {

    productsContainerApp();
    productDetailsApp();
    navigationApp();
    productsNavApp();
    cartApp();
    
}

export default app;