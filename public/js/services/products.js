export async function fetchProducts() {
  const response = await axios.get("http://localhost:3000/api/v1/products");
  return response.data;
}
