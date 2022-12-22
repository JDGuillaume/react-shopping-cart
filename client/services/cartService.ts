import axios from 'axios';

const baseUrl = '/api';

// Retrieve Cart
export const getCart = async () => {
  const response = await axios.get(`${baseUrl}/cart`);
  return response.data;
};

// Add to Cart
export const addToCart = async productId => {
  const response = await axios.post(`${baseUrl}/add-to-cart`, { productId });
  return response.data;
};

// Checkout (aka Delete All Items in Cart)
export const checkout = async () => {
  const response = await axios.post(`${baseUrl}/checkout`);
  return response.data;
};

const cartService = {
  addToCart,
  getCart,
  checkout,
};

export default cartService;
