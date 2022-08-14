import { PRODUCTS_BASE_URI } from '../constants.js';

// export async function fetchProducts(query = '') {
//     const response = await axios.get(
//         `http://localhost:3000/api/v1/products${query}`
//     );
//     return response.data;
// }
//
// export async function fetchProductById(id) {
//     const response = await axios.get(
//         `http://localhost:3000/api/v1/products/${id}`
//     );
//     return response.data;
// }
//
// export async function search(searchTerm) {
//     const response = await axios.get(
//         `http://localhost:3000/api/v1/products/search?searchTerm=${searchTerm}`
//     );
//     return response.data;
// }

export class ProductsServices {
    constructor() {
        this.uri = PRODUCTS_BASE_URI;
    }
    async fetchProducts(query = '') {
        const response = await axios.get(`${this.uri}/${query}`);
        return response.data;
    }

    async fetchProductById(id) {
        const response = await axios.get(`${this.uri}/${id}`);
        return response.data;
    }

    async search(searchTerm) {
        const response = await axios.get(
            `${this.uri}/search?searchTerm=${searchTerm}`
        );
        return response.data;
    }
}
