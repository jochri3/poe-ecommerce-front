export async function fetchCategories() {
    const response = await axios.get('http://localhost:3000/api/v1/categories');
    return response.data;
}

// Rechercher
