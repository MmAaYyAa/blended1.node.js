import { readProducts } from '../utils/readProducts.js';

export const countProducts = async () => {
  try {
    const productsNumber = await readProducts();
    return productsNumber.length;
  } catch (error) {
    console.log(`Error reading products: ${error.message}`);
  }
};

console.log(await countProducts());
