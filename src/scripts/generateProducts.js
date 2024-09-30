import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';
import { readProducts } from '../utils/readProducts.js';

export const generateProducts = async (number) => {
  try {
    const existingProducts = await readProducts();
    const newProducts = [];
    for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }
    const updatedProducts = [...existingProducts, ...newProducts];
    await writeProducts(updatedProducts);
    console.log(`Successfully generated and added ${number} products.`);
  } catch (error) {
    console.log(`Error generating products: ${error.message}`);
  }
};

generateProducts(3);
