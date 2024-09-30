import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const addOneContact = async () => {
  try {
    const existingProducts = await readProducts();
    const newProduct = createFakeProduct();
    const updatedProducts = [...existingProducts, newProduct];
    await writeProducts(updatedProducts);
  } catch (error) {
    console.log(`Error adding contact: ${error.message}`);
  }
};

addOneContact();
