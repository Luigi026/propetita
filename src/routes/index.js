const express = require('express');
const indexController = require('../controllers/indexController')

const router = express.Router();

/*    /    */


router
    .get('/', indexController.index )
    .get('/admin', indexController.admin)
    .get('/search', indexController.search)

module.exports = router;
