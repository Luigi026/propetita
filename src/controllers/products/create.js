const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Products');
const { writeJSON, readJSON } = require("../../data");


module.exports = (req, res) => {

    const products = readJSON('products.json')// de esta forma me traigo los productos y leo el archivo.json

    const newProduct = new Product(req.body);

   /*  console.log(newProduct) */

    products.push(newProduct);

    writeJSON(products, 'products.json')

    return res.redirect('/admin')
}

