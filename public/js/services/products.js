export async function fetchProducts(query = '') {
    const response = await axios.get(
        `http://localhost:3000/api/v1/products${query}`
    );
    return response.data;
}

export async function fetchProductById(id) {
    const response = await axios.get(
        `http://localhost:3000/api/v1/products/${id}`
    );
    return response.data;
}

export async function search(searchTerm) {
    const response = await axios.get(
        `http://localhost:3000/api/v1/products/search?searchTerm=${searchTerm}`
    );
    return response.data;
}
