const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    categoryId: String,
    price: Number,
    image: String,

})


module.exports = mongoose.model('products', productSchema);