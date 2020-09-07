import {
    productDetailsContainer, productsContainer
} from '../universal/selectors';
import observer from '../universal/observer';
import fillWithCurrentProductDetails from '../productDetailsContainer/fillWithChosenProductDetails';

class Product {
    constructor([id, name, price, destination, onSale, imgUrl, fabric, avaibleSizes, saleValue]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.destination = destination;
        this.onSale = onSale;
        this.imgUrl = imgUrl;
        this.fabric = fabric;
        this.avaibleSizes = avaibleSizes;
        this.saleValue = saleValue;
        this.priceIncludingSale = (this.price - this.price * this.saleValue).toFixed(2);
        this.dataArray = [this.name, this.price, this.destination, this.imgUrl, this.fabric, this.avaibleSizes];

        this.mainDiv = document.createElement('div');
        this.seeMoreBtn = document.createElement('button');
        this.priceSpace = document.createElement('span');
        this.img = new Image();
        this.htmlElements = [this.mainDiv, this.img, this.seeMoreBtn, this.priceSpace];
        this.seeDetails = this.seeDetails.bind(this);
    }

    load() {
        const classNames = [
            'product', 'product-image', 'product-see-more-button', 'product-price-holder' 
        ]
        this.htmlElements.forEach((el, i) => el.className = classNames[i]);

        this.mainDiv.title = this.imgUrl;
        [this.img.src, this.img.alt] = ['', `${name} image`];

        this.priceSpace.textContent = `${this.name} $${this.price}`;
        this.seeMoreBtn.textContent = 'Read more'

        this.seeMoreBtn.addEventListener('click', this.seeDetails);

        this.htmlElements.splice(1).forEach(element => this.mainDiv.appendChild(element));

        this.onSale && this.showSaleValue();
    
        productsContainer.appendChild(this.mainDiv);

        this.observe();
    }

    show() {
        this.mainDiv.style.display = 'inline';
    }

    hide() {
        this.mainDiv.style.display = 'none';
    }

    seeDetails() {
        const dataArray = [
            this.name, this.priceIncludingSale, this.destination, this.fabric, 
            this.avaibleSizes, this.imgUrl, this.id
        ];

        fillWithCurrentProductDetails(dataArray);
        productDetailsContainer.classList.add('container__product-details-container--shown');
        
    }

    showSaleValue() {
        const saleHolder = document.createElement('span');

        saleHolder.className = 'sale-holder';
        saleHolder.textContent = `-${this.saleValue * 100}%`;

        this.mainDiv.appendChild(saleHolder);
    }

    observe() {
        observer.observe(this.mainDiv);
    }

}

export default Product;