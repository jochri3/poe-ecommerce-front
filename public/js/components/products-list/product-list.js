import { ProductItem } from "./product-item.js";

export class ProductList {
  constructor(products) {
    this.products = products;
  }

  render() {
    return this.products.reduce(
      (html, product) => html + ProductItem(product),
      ""
    );
  }
}
