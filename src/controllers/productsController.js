const fs = require('fs');
const path = require('path');
/* const { v4: uuidv4 } = require('uuid');
const Product = require('../../data/Products');
const { writeJSON, readJSON } = require("../../data"); */

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = { 
	
    index: (req, res) => {
        const productsFilePath = path.join(__dirname, '../data/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', {
            products,
            toThousand
        })
	},

    detail : (req, res) => {
		//Voy a retornar el renderizado de la vista detail, y le voy a pasar las propiedades de un producto (...prouct)
		//voy a guardar en product lo que me filtre con FIND(que me devuelve un objeto) el proccucto cuyo ID coicida con el ID que ingresa por parametro
		const product = products.find(product => product.id === +req.params.id)
        res.render('productDetail', {
			...product,
			toThousand
		})
	},
    create: (req, res) => {
		res.render('productCreate')
/*
		const products = readJSON('products.json')// de esta forma me traigo los productos y leo el archivo.json
        const newProduct = new Product(req.body);
        console.log(newProduct)
        products.push(newProduct);
        writeJSON(products, 'products.json')//le paso el array products que quiero que guarde que fue modificado en New product y writeJSON se encarga de guardarlo en el archivo productos.json
        return res.redirect('/admin') // se coloca ruta, no vistas(me redirige a la ruta y esa rutame renderiza admin)
*/		
	},
	
    store: (req, res) => { //store : metodo que se encarga de guardar la informacion
		const {name, price, discount, description, category} = req.body;
		let newProduct = { 
			id : products[products.length -1].id + 1,
			name : name.trim(),
			price : +price,
			discount : +discount,
			category,
			description : description.trim(),
			image : null
		}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath,JSON.stringify(products, null, 3), 'utf-8')
		res.redirect('/products')
	},

    edit: (req, res) => {
		const product = products.find(product => product.id === +req.params.id)
        res.render('productEdit', {
			...product
		})
	},
	
    update: (req, res) => {
		const {name, price, discount, description, category} = req.body; //Debo volver a desestructurar del body, de lo contrario no sabe de donde tomar los datos
//Voy a guardar en productModify lo que reccorra con un map donde cada elemento es un producto cuyo id es estrictamente igual al ID que recibo por parametro,
//necesito que el producto en su propiedad nombre adopte su nombre, categoria, precio, descuento, descripcion, imagen.
		const productsModify = products.map(product => {

			if(product.id === +req.params.id){
				product.name = name.trim();
				product.price = +price;
				product.discount = +discount;
				product.category = category;
				product.description = description.trim();
			}
			return product
		})
		fs.writeFileSync(productsFilePath,JSON.stringify(products, null, 3), 'utf-8')
		res.redirect('/products')	
		/* res.send(productsModify) */ //Esto me lo muestra en formato JSON, Sirve para evitar romper el
	},
	
    destroy: (req, res) => {
		const productsModify = products.filter(product => product.id !== +req.params.id)
		fs.writeFileSync(productsFilePath,JSON.stringify(productsModify, null, 3), 'utf-8')
		res.redirect('/products')
	}

}

module.exports = controller