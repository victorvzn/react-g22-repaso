export const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products?skip=0&limit=10'

  const response = await fetch(url)

  const data = await response.json()

  return data
}