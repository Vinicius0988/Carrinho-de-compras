const fetchProducts = async (searchTerm = '') => {
  const response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
  const data = await response.json()

  return data
}

export default fetchProducts