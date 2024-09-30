import { writeProducts } from '../utils/writeProducts.js';

const clearProducts = async () => {
  try {
    await writeProducts([]);
  } catch (error) {
    console.log(`Error removing all products: ${error.message}`);
  }
};

clearProducts();
