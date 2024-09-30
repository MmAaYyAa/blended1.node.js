import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  try {
    const products = await readProducts();
    const randomNumber = Math.floor(Math.random() * products.length);
    products.splice(randomNumber, 1);
    writeProducts(products);
  } catch (error) {
    console.log(`Error removing product: ${error.message}`);
  }
};

removeRandomProduct();
