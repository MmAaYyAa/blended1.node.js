import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (products) => {
  try {
    const data = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error(`Error writing contacts: ${error.message}`);
  }
};
