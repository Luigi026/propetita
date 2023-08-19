const { readJSON } = require("../../data")

module.exports = (req, res) => {
    
    const categories = readJSON('categories.json');

    /* console.log(categories); */

    return res.render('productAdd', {
        categories
    })
}