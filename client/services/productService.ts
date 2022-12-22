import axios from 'axios';

const baseUrl = '/api/products';

/**
 * Get All products
 */
export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

/**
 * Create a product
 */
export const create = async newObject => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

/**
 * Update a product
 */
export const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

/**
 * remove a product
 */
export const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const productService = {
  getAll,
  create,
  update,
  remove,
};

export default productService;
