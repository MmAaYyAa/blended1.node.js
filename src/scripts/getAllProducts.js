import { readProducts } from '../utils/readProducts.js';

const getAllProducts = async () => {
  try {
    const products = await readProducts();
    return products;
  } catch (error) {
    console.log(`Error reading products: ${error.message}`);
  }
};

console.log(await getAllProducts());
