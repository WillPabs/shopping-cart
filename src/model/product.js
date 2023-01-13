const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        required: true,
        type: String,
    },
    name : {
        required: true,
        type: String
    }, 
    description : {
        required: true,
        type: String
    }, 
    imageUrl : {
        required: true,
        type: String
    },  
    price : {
        required: true,
        type: Number
    },  
    availableQuantity : {
        required: true,
        type: Number
    }, 
});

module.exports = mongoose.model('Product', productSchema);