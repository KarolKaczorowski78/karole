import { cartItemsContainer, cartItems } from '../universal/selectors';
import updateTotalPrice from '../cart/updateTotalPrice';

class CartProduct  {
    constructor([id, name, price, destination, fabric, imgUrl, size]) {
        this.id = id;
        this.name = name;
        this.price = price,
        this.destination = destination;
        this.imgUrl = imgUrl;
        this.fabric = fabric;
        this.size = size;
        this.ammount = 0;

        this.mainDiv = document.createElement('div');
        this.ammountHolder = document.createElement('div');
        this.ul = document.createElement('ul');

        this.decreaseAmmount = this.decreaseAmmount.bind(this);
    }

    load() {
        const deleteBtn = document.createElement('button');
        const img = document.createElement('img');

        const htmlElements = [this.mainDiv, img, this.ammountHolder, this.ul, deleteBtn];
        const classNames = [
            'cart-item', 'cart-item-img', 'cart-item-ammount-holder', 'cart-item-ul',
            'cart-item-delete', 
        ]

        const dataArray = [
            `${this.name} for ${this.destination}`,
            `Price: $${this.price}`,
            `Fabric: ${this.fabric}`,
            `Size: ${this.size.toUpperCase()}`
        ];

        htmlElements.forEach((el, i) => {
            el.className = classNames[i]
            i != 0 && this.mainDiv.appendChild(el);   
        });

        img.src = this.imgUrl;
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', this.decreaseAmmount)

        cartItemsContainer.appendChild(this.mainDiv);
        cartItems.push(this);

        this.fillListWithData(dataArray);
        this.increaseAmmount();
    }

    fillListWithData(arr) {
        for (let i = 0; i < arr.length; i++) {
            const li = document.createElement('li');
            li.className = "cart-item-ul-li";
            li.textContent = arr[i];
            this.ul.appendChild(li);
        }
    }

    removeFromCart() {
        cartItemsContainer.removeChild(this.mainDiv);
        cartItems.splice(cartItems.indexOf(this), 1);
    }

    increaseAmmount() {
        this.ammount++;
        this.ammountHolder.textContent = `x${this.ammount}`;
        updateTotalPrice();
    }

    decreaseAmmount() {
        this.ammount--;
        this.ammountHolder.textContent = `x${this.ammount}`;
        this.ammount === 0 && this.removeFromCart();
        updateTotalPrice();
    }

}

export default CartProduct;