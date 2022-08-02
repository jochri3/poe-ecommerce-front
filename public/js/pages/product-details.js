import { fetchProductById } from '../services/products.js';
import { fetchCategories } from '../services/categories.js';
import { ProductDetails } from '../components/product-details/product-details.js';
import { Navbar } from '../components/navigation/navbar.js';

export class ProductDetailsPage {
    constructor() {
        this.$productDetails = document.querySelector('#products-details');
        this.$navigation = document.querySelector('#navigation');
        this.id = new URLSearchParams(window.location.search).get('product');
        this.categories = [];
        this.product = null;
    }

    getProduct() {
        return fetchProductById(this.id).then((data) => {
            this.product = data;
        });
    }

    getCategories() {
        return fetchCategories().then((data) => {
            this.categories = data;
        });
    }

    async main() {
        await Promise.all([this.getProduct(), this.getCategories()]);
        this.$navigation.innerHTML = Navbar(this.categories);
        this.$productDetails.innerHTML = ProductDetails(this.product);
    }
}

const product = new ProductDetailsPage();
product.main();
