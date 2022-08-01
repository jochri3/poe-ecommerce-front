import { fetchProducts } from '../services/products.js';
import { ProductList } from '../components/products-list/product-list.js';
import { fetchCategories } from '../services/categories.js';
import { Navbar } from '../components/navigation/navbar.js';

export { fetchProducts } from '../services/products.js';

class Products {
  constructor() {
    this.products = [];
    this.categories = [];
    this.$products = document.querySelector('#products');
    this.$navigation = document.querySelector('#navigation');
    this.params = window.location.search || '';
  }

  getProducts() {
    return fetchProducts(this.params).then((data) => {
      this.products = data;
    });
  }

  getCategories() {
    return fetchCategories().then((data) => {
      this.categories = data;
    });
  }

  async main() {
    await Promise.all([this.getProducts(), this.getCategories()]);
    const productsList = new ProductList(this.products);
    this.$products.innerHTML = `<h1>Products List</h1><div class="container"><div class="row">${productsList.render()}</div></div>`;
    this.$navigation.innerHTML = Navbar(this.categories);
  }
}

const products = new Products();

products.main();
