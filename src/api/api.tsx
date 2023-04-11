import productData from './../catalog.json';
import categoryData from './../category.json';

export const catalogAPI = {
    getCatalog: () => Promise.resolve(productData),
}

export const categoryAPI = {
    getCategory: () => Promise.resolve(categoryData)
}