const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index : (req, res) => {

        res.render('index', {
            productsEspecias : products.filter(product => product.category === 'especias'),
            productsPlatos : products.filter(product => product.category === 'platos'),
            productsChichas : products.filter(product => product.category === 'chichas'),
            toThousand
        });
    },
    admin : (req, res) => {
        res.render('admin');
    },   
    search: (req, res) => {
       /*  res.send(req.query) */
       const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
		/* res.send(results) */ // Con esto verifico que me devuelva lo esperando en archivo json
		res.render('result', {
			results,
			toThousand,
			keywords : req.query.keywords 
		})
       
    }
};


module.exports = controller;