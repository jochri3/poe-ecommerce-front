import {
    fetchProducts,
    ProductsServices,
    search,
} from '../services/products.js';
import { ProductList } from '../components/products-list/product-list.js';
import { fetchCategories } from '../services/categories.js';
import { Navbar } from '../components/navigation/navbar.js';

export { fetchProducts } from '../services/products.js';

class Products {
    constructor() {
        this.products = [];
        this.categories = [];
        this.selectedCategory = window.location.search || '';
        this.$products = document.querySelector('#products');
        this.$navigation = document.querySelector('#navigation');
        this.$searchInput = null;
        this.$categoryMenu = null;
        this.productsListComponent = null;
        this.productsService = new ProductsServices();
    }

    attachEventListeners() {
        this.$categoryMenu = document.querySelectorAll('.category-list');
        self = this; //this is because the event listener creates it's own this
        this.$categoryMenu.forEach((element) => {
            element.addEventListener('click', async function (e) {
                window.history.pushState(
                    null,
                    `${e.target.innerText}`,
                    `/?category=${e.target.id}`
                );
                self.selectedCategory = window.location.search;
                await self.getProducts();
                self.renderProducts();
            });
        });

        this.$searchInput = document.querySelector('#search-input');
        this.$searchInput.addEventListener('input', async function (e) {
            await self.searchProduct(this.value);
            self.renderProducts();
        });
    }

    getProducts() {
        return this.selectedCategory.then((data) => {
            this.products = data;
        });
    }

    getCategories() {
        return this.productsService.fetchCategories().then((data) => {
            this.categories = data;
        });
    }

    searchProduct(searchTerm) {
        return this.productsService.search(searchTerm).then((data) => {
            this.products = data;
        });
    }

    renderProducts() {
        this.productsListComponent.products = this.products;
        console.log('products : ', this.products);
        console.log('components : ', this.productsListComponent.products);
        this.$products.innerHTML = `<h1>Products List</h1><div class="container"><div class="row">${this.productsListComponent.render()}</div></div>`;
    }

    async main() {
        await Promise.all([this.getProducts(), this.getCategories()]);
        this.productsListComponent = new ProductList(this.products);
        this.renderProducts();
        this.$navigation.innerHTML = Navbar(this.categories);
        this.attachEventListeners();
    }
}

const products = new Products();
products.main();
