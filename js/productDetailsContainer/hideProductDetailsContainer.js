import { productDetailsContainer } from '../universal/selectors';

const hideProductDetailsContainer = () => 
            productDetailsContainer.classList.remove('shown-product-details-container');

export default hideProductDetailsContainer;