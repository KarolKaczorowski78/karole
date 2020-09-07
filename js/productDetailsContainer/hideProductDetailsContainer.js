import { productDetailsContainer } from '../universal/selectors';

const hideProductDetailsContainer = () => 
            productDetailsContainer.classList.remove('container__product-details-container--shown');

export default hideProductDetailsContainer;