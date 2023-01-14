
import { products } from "./constants/data.js"

import Product from "./model/product-schema.js";

const DefaultData = async() => {
    try {
        await Product.insertMany(products);

        console.log('Products imported successfully');
    } catch (error) {
        console.log('Restricting Insertion of default data ',error.message);
    }
}

export default DefaultData;