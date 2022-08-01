export async function fetchProducts(query = '') {
  const response = await axios.get(
    `http://localhost:3000/api/v1/products${query}`
  );
  return response.data;
}
