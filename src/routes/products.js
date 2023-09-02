const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*    /products    */

router  
    .get('/', productsController.index)

    .get('/detail/:id', productsController.detail)

    .get('/create', productsController.create)

    .post('/create', productsController.store)

    .get('/edit/:id', productsController.edit)

    .put('/edit/:id', productsController.update)

    .delete('/delete/:id', productsController.destroy)

 

  
module.exports = router;    