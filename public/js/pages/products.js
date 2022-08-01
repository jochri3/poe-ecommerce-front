import { fetchProducts } from "../services/products.js";
import { ProductList } from "../components/products-list/product-list.js";

export { fetchProducts } from "../services/products.js";

class Products {
  constructor() {
    this.products = [];
    this.$products = document.querySelector("#products");
  }

  fetchProducts() {
    return fetchProducts().then((data) => {
      this.products = data;
    });
  }

  async main() {
    await this.fetchProducts();
    console.log("Produits : ", this.products);
    const productsList = new ProductList(this.products);
    this.$products.innerHTML = `<h1>Products List</h1><div class="container"><div class="row">${productsList.render()}</div></div>`;
  }
}

const products = new Products();

products.main();
