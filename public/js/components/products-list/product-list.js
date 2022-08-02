import { ProductItem } from './product-item.js';

export class ProductList {
    constructor(products) {
        this.products = products;
    }

    set product(products) {
        this.products = products;
        this.render();
    }

    render() {
        return this.products.reduce(
            (html, product) => html + ProductItem(product),
            ''
        );
    }
}
